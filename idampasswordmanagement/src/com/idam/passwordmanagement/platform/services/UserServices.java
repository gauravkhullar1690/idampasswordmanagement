/************************************************************************
 * 
 * 	FileName	:  UserServices.java
 *  
 *  Description :  This is class that provides different services to user
 *  			   to provide database access. 
 *  			    
 *  Revision History:
 *  ---------------------------------------------------------------------
 *  	DATE	 	NAME			MODULE 			  Changes
 *  ---------------------------------------------------------------------
 *  07-12-2013	Gaurav Khullar 	User Services	 createNewUser added
 *  14-12-2013  Gorav Dhiman	User Services    delete,update,find & 
 *  											 authenticate User added
 *  
 ************************************************************************/

package com.idam.passwordmanagement.platform.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.swing.text.MaskFormatter;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang.RandomStringUtils;
import org.hibernate.HibernateException;

import antlr.DocBookCodeGenerator;

import com.idam.passwordmanagement.common.CommonConstants;
import com.idam.passwordmanagement.common.EmailNotifier;
import com.idam.passwordmanagement.model.user.MasterUser;
import com.idam.passwordmanagement.model.user.UserDetails;
import com.idam.passwordmanagement.platform.dao.UserDAO;
import com.idam.passwordmanagement.platform.hbm.StringUtils;
import com.idam.passwordmanagement.platform.logging.IDAMLogger;

/**
 * @author gaurav.khullar
 * 
 */
public class UserServices implements IUserServices {

	private UserDAO userDAO;
	private final String CLASS_NAME = this.getClass().getName();

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (getUserDAO)
	 * -----------------------------------------------------------------------
	 * This is getter method for setting userDAO variable
	 * 
	 * @return : UserDAO The initialised class variable is returned.
	 * 
	 ***************************************************************************/

	public UserDAO getUserDAO() {
		return userDAO;
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (setUserDAO)
	 * -----------------------------------------------------------------------
	 * This is setter method for setting userDAO variable
	 * 
	 * @param UserDAO
	 *            The object that is used to initialise class variable.
	 * 
	 * @return : void
	 * 
	 ***************************************************************************/

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (saveMasterUser)
	 * -----------------------------------------------------------------------
	 * This is method used to create given user record in database.
	 * 
	 * @param MasterUser
	 *            The bean for the user details that to be create in database.
	 * 
	 * @return : Record that is added.
	 * @throws Exception
	 * @throws HibernateException
	 * 
	 ***************************************************************************/

	public MasterUser saveMasterUser(MasterUser masterUser)
			throws HibernateException, Exception {
		return userDAO.saveMasterUser(masterUser);
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (saveUserDetails)
	 * -----------------------------------------------------------------------
	 * This is method used to create given user record in database.
	 * 
	 * @param MasterUser
	 *            The bean for the user details that to be create in database.
	 * 
	 * @return : Record that is added.
	 * @throws Exception
	 * @throws HibernateException
	 * 
	 ***************************************************************************/

	public UserDetails saveUserDetails(UserDetails userDetails)
			throws HibernateException, Exception {
		return userDAO.saveUserDetails(userDetails);
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (deleteUser)
	 * -----------------------------------------------------------------------
	 * This is method used to delete given user record from database.
	 * 
	 * @param MasterUser
	 *            The bean for the user details that to be delete in database.
	 * 
	 * @return : void
	 * @throws Exception
	 * @throws HibernateException
	 * 
	 ***************************************************************************/

	public void deleteUser(MasterUser masterUser) throws HibernateException,
			Exception {
		userDAO.deleteUser(masterUser);
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (updateUser)
	 * -----------------------------------------------------------------------
	 * This is method used to update given user record in database.
	 * 
	 * @param MasterUser
	 *            The bean for the user details that to be updated in database.
	 * 
	 * @return : void
	 * @throws Exception
	 * @throws HibernateException
	 * 
	 ***************************************************************************/

	public void updateUser(MasterUser masterUser) throws HibernateException,
			Exception {
		userDAO.updateMasterUser(masterUser);
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (authenticateUser)
	 * -----------------------------------------------------------------------
	 * This is method that check whether user is registered or not.
	 * 
	 * @param MasterUser
	 *            The bean for the user details.
	 * 
	 * @param HttpServletResponse
	 *            Response object to add cookie
	 * 
	 * @return : True or False
	 * @throws Exception
	 * @throws HibernateException
	 * 
	 ***************************************************************************/

	public String authenticateUser(MasterUser masterUser)
			throws HibernateException, Exception {
		String tokenValueBase64 = null;
		if (StringUtils.isNotNullOrNotEmpty(masterUser.getToken())) {
			// login using the token
			String token = new String(Base64.decodeBase64(masterUser.getToken()
					.getBytes()));
			String email = token.substring(0, token.indexOf(':'));
			List<MasterUser> masterUserList = userDAO
					.findMasterUserByEmail(email);
			if (masterUserList != null && !masterUserList.isEmpty()) {
				IDAMLogger
						.trace(CLASS_NAME, "authenticateUser",
								masterUser.getEmail()
										+ " login successful using token");
				return masterUser.getToken();
			}
		} else if (StringUtils.isNotNullOrNotEmpty(masterUser.getRemmberme())
				&& masterUser.getRemmberme().equalsIgnoreCase("true")) {
			// login and set the remember me token
			List<MasterUser> masterUserList = userDAO
					.findMasterUserByEmail(masterUser.getEmail());
			if (masterUserList != null && !masterUserList.isEmpty()) {
				IDAMLogger.trace(CLASS_NAME, "authenticateUser",
						masterUser.getEmail() + " user found in DB");
			} else {
				IDAMLogger.trace(CLASS_NAME, "authenticateUser",
						masterUser.getEmail() + " user not found in DB");
				return CommonConstants.FAILURE_MSG;
			}
			String signatureValue = DigestUtils.md5Hex(masterUser.getEmail()
					+ ":" + CommonConstants.EXPIRYTIME + ":"
					+ masterUser.getPassword() + ":"
					+ CommonConstants.REST_SERVICES_COOKIE_KEY);
			String tokenValue = masterUser.getEmail() + ":"
					+ CommonConstants.EXPIRYTIME + ":" + signatureValue;
			tokenValueBase64 = new String(Base64.encodeBase64(tokenValue
					.getBytes()));
			masterUser.setToken(tokenValueBase64);
			Map<String, Object> tempMap = new HashMap<String, Object>();
			tempMap.put("token", masterUser.getToken());
			if (masterUserList.get(0).getPassword()
					.equals(masterUser.getPassword())) {
				IDAMLogger
						.trace(CLASS_NAME,
								"authenticateUser",
								masterUser.getEmail()
										+ " login successful using password and setting token");
				userDAO.updateMasterUser(masterUser.getEmail(), tempMap);
				return tokenValueBase64;
			} else {
				IDAMLogger
						.trace(CLASS_NAME,
								"authenticateUser",
								masterUser.getEmail()
										+ " password doesn't match will not set the token");
				return CommonConstants.FAILURE_MSG;
			}
		} else {
			// normal login without remember me
			List<MasterUser> masterUserList = userDAO
					.findMasterUserByEmail(masterUser.getEmail());
			if (masterUserList != null && !masterUserList.isEmpty()) {
				if (masterUserList.get(0).getPassword()
						.equals(masterUser.getPassword())) {
					IDAMLogger.trace(CLASS_NAME, "authenticateUser",
							masterUser.getEmail()
									+ " login successful using password");
					return CommonConstants.SUCCESS_MSG;
				} else {
					IDAMLogger.trace(CLASS_NAME, "authenticateUser",
							masterUser.getEmail() + " password doesn't match");
					return CommonConstants.FAILURE_MSG;
				}
			} else {
				IDAMLogger.trace(CLASS_NAME, "authenticateUser",
						masterUser.getEmail() + " not found in the DB");
				return CommonConstants.FAILURE_MSG;
			}
		}
		return CommonConstants.FAILURE_MSG;
	}

	/**
	 * 
	 */
	public String resetPassword(String email) throws HibernateException,
			Exception {
		Map<String, String> resultMap = new HashMap<String, String>();
		try {

			List<MasterUser> userList = userDAO.findMasterUserByEmail(email);
			if (userList != null && !userList.isEmpty()) {
				String randomPassword = RandomStringUtils
						.randomAlphanumeric(CommonConstants.RANDOM_PASSWORD_LENGTH);
				try {
					Map<String, Object> tempMap = new HashMap<String, Object>();
					tempMap.put("password", randomPassword);
					userDAO.updateMasterUser(email, tempMap);
				} catch (Exception e) {
					IDAMLogger.error(CLASS_NAME,
							"resetPassword Exception in updating new Passowrd for User "
									+ email, e, true);
					throw e;
				}
				String[] toList = new String[1];
				toList[0] = email;
				try {
					EmailNotifier.sendNewPasswordMail(toList, randomPassword,
							CommonConstants.CONTACT_EMAIL_ADDRESS);
				} catch (Exception e) {
					IDAMLogger
							.error(CLASS_NAME,
									"resetPassword Exception in Sending Email",
									e, true);
					throw e;
				}
				return CommonConstants.PASSWORD_RESET_SUCCESS;
			} else {
				IDAMLogger.trace(CLASS_NAME, "resetPassword",
						"Unable to find user with email");
				return CommonConstants.USER_EMAIL_NOT_FOUND;
			}
		} catch (Exception e) {
			IDAMLogger.error(CLASS_NAME,
					"resetPassword unable to find user with email " + email, e,
					true);
			throw e;
		}
	}

	public Map<String, HashMap<String, String>> resetPassword(HashMap<String, String> resetMap)
			throws HibernateException, Exception {
		Map<String, HashMap<String, String>> resultMap = new HashMap<String, HashMap<String,String>>();
		try {
			String adPassword = resetMap.get("ad");
			String dbPassword = resetMap.get("db");
			String helpDesk = resetMap.get("helpDesk");
			ConnectDatabase db = new ConnectDatabase();
			CommandPrompt ad = new CommandPrompt();
			resultMap.put("ad", db.getConnection(dbPassword,helpDesk));
			resultMap.put("db", ad.exec(adPassword,helpDesk));
			String[] toList = new String[1];
			toList[0] = "gauravkhullar1690@gmail.com";
			try {
				EmailNotifier.sendNewPasswordMailIdAM(toList, resetMap,
						CommonConstants.CONTACT_EMAIL_ADDRESS);
			} catch (Exception e) {
				IDAMLogger
						.error(CLASS_NAME,
								"resetPassword Exception in Sending Email",
								e, true);
				throw e;
			}
			
		} catch (Exception e) {
			IDAMLogger.error(CLASS_NAME,
					"resetPassword unable reset Password ", e,
					true);
			throw e;
		}
		return resultMap;
	}

	@Override
	public Map<String, String> generateRandomPassword()
			throws HibernateException, Exception {
		Map<String, String> returnData = new HashMap<String, String>();
		returnData.put("ad", RandomStringUtils
				.randomAlphanumeric(10));
		returnData.put("db", RandomStringUtils
				.randomAlphanumeric(10));
		return returnData;
	}
	
}
