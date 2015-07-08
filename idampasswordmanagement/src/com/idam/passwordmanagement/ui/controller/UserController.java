/************************************************************************
 * 
 * 	FileName	:  UserController.java
 *  
 *  Description : This is controller class for all request under User 
 *  			  category.
 *  			    
 *  Revision History:
 *  ---------------------------------------------------------------------
 *  	DATE	 	NAME			MODULE 			  Changes
 *  ---------------------------------------------------------------------
 *  07-12-2013	Gaurav Khullar 	User Controller	 createNewUser added
 *  14-12-2013  Gorav Dhiman	User Controller  delete,update,find & 
 *  											 authenticate User added
 *  
 ************************************************************************/

package com.idam.passwordmanagement.ui.controller;

/**
 * 

 *
 **/
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.idam.passwordmanagement.common.CommonConstants;
import com.idam.passwordmanagement.model.user.MasterUser;
import com.idam.passwordmanagement.model.user.UserDetails;
import com.idam.passwordmanagement.platform.logging.IDAMLogger;
import com.idam.passwordmanagement.platform.services.IUserServices;
import com.idam.passwordmanagement.transiet.UsersTraveller;

@Controller
@RequestMapping("/user")
public class UserController implements Serializable {

	private static final long serialVersionUID = 1L;
	// Properties
	private final String CLASS_NAME = this.getClass().getName();

	@Autowired
	private IUserServices userService;

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (controller methods)
	 * -----------------------------------------------------------------------
	 * This is controller method which performs action on receiving request for
	 * createNewUser.
	 * 
	 * @param MasterUser
	 *            The bean for the user details.
	 * 
	 * @return :
	 * 
	 ***************************************************************************/

	@RequestMapping(value = "/saveMasterUser", method = RequestMethod.POST, headers = { "Accept=application/json" })
	public @ResponseBody
	Map<String, String> saveMasterUser(
			@RequestBody HashMap<String, MasterUser> userMap) throws Exception {
		IDAMLogger.trace(CLASS_NAME, "saveMasterUser",
				"Entering saveMasterUser method");
		Map<String, String> returnMap = new HashMap<String, String>();
		try {
			MasterUser masterUser = userService.saveMasterUser(userMap
					.get(CommonConstants.MASTER_USER));
			returnMap.put(CommonConstants.MASTER_USER_ID, masterUser.getId()
					.toString());
			IDAMLogger.info(CLASS_NAME,
					"saveMasterUser : User with id = " + masterUser.getId()
							+ " updation Successful.", true);
		} catch (Exception e) {
			IDAMLogger.error(CLASS_NAME, "saveMasterUser", e, true);
			Exception e1 = new Exception("User already Exist");
			throw e1;
		}
		IDAMLogger.trace(CLASS_NAME, "saveMasterUser",
				"Exiting saveMasterUser method");
		return returnMap;
	}

	@RequestMapping(value = "/saveUserDetails", method = RequestMethod.POST, headers = { "Accept=application/json" })
	public @ResponseBody
	Map<String, String> saveUserDetails(
			@RequestBody HashMap<String, UserDetails> userMap) throws Exception {
		IDAMLogger.trace(CLASS_NAME, "saveUserDetails",
				"Entering saveUserDetails method");
		Map<String, String> returnMap = new HashMap<String, String>();
		try {
			UserDetails userDetails = userService.saveUserDetails(userMap
					.get(CommonConstants.USER_DETAILS));
			returnMap.put(CommonConstants.MASTER_USER,
					userDetails.getFirstName());
			IDAMLogger.info(
					CLASS_NAME,
					"saveUserDetails : User with firstName = "
							+ userDetails.getFirstName()
							+ " updation Successful.", true);
		} catch (Exception e) {
			IDAMLogger.error(CLASS_NAME, "saveUserDetails", e, true);
		}
		IDAMLogger.trace(CLASS_NAME, "saveUserDetails",
				"Exiting saveUserDetails method");
		return returnMap;
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (controller methods)
	 * -----------------------------------------------------------------------
	 * This is controller method which performs action on receiving request for
	 * deleteUser.
	 * 
	 * @param MasterUser
	 *            The bean for the user details.
	 * 
	 * @return :
	 * 
	 ***************************************************************************/

	@RequestMapping(value = "/deleteUser", method = RequestMethod.POST, headers = { "Accept=application/json" })
	public @ResponseBody
	Map<String, String> deleteUser(@RequestBody MasterUser masterUser) {
		IDAMLogger.trace(CLASS_NAME, "deleteUser",
				"Entering deleteUser method");
		Map<String, String> returnMap = new HashMap<String, String>();
		try {
			userService.deleteUser(masterUser);
			IDAMLogger.info(CLASS_NAME,
					"deleteUser : User deletion Successful ", true);
		} catch (Exception e) {
			IDAMLogger.error(CLASS_NAME, "deleteUser", e, true);
		}
		IDAMLogger.trace(CLASS_NAME, "deleteUser",
				"Exiting deleteUser method");
		return returnMap;
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (controller methods)
	 * -----------------------------------------------------------------------
	 * This is controller method which performs action on receiving request for
	 * updateUser.
	 * 
	 * @param MasterUser
	 *            The bean for the user details.
	 * 
	 * @return :
	 * 
	 ***************************************************************************/

	@RequestMapping(value = "/updateUser", method = RequestMethod.POST, headers = { "Accept=application/json" })
	public @ResponseBody
	Map<String, String> updateUser(@RequestBody MasterUser masterUser) {
		IDAMLogger.trace(CLASS_NAME, "updateUser",
				"Entering updateUser method");
		Map<String, String> returnMap = new HashMap<String, String>();
		try {
			userService.updateUser(masterUser);
			IDAMLogger.info(CLASS_NAME,
					"updateUser : User updation Successful ", true);
		} catch (Exception e) {
			IDAMLogger.error(CLASS_NAME, "updateUser", e, true);
		}
		IDAMLogger.trace(CLASS_NAME, "updateUser",
				"Exiting updateUser method");
		return returnMap;
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (controller methods)
	 * -----------------------------------------------------------------------
	 * This is controller method which performs action on receiving request for
	 * findUser.
	 * 
	 * @param MasterUser
	 *            The bean for the user details.
	 * 
	 * @return : Boolean whether successful login or invalid login.
	 * 
	 ***************************************************************************/

	@RequestMapping(value = "/authenticateUser", method = RequestMethod.POST, headers = { "Accept=application/json" })
	public @ResponseBody
	String authenticateUser(@RequestBody HashMap<String, MasterUser> requestMap) {
		IDAMLogger.trace(CLASS_NAME, "authenticateUser",
				"Entering authenticateUser method");
		String token = null;
		try {
			token = userService.authenticateUser(requestMap
					.get(CommonConstants.MASTER_USER));
			IDAMLogger.info(CLASS_NAME,
					"authenticateUser : User logged in successfully ", true);
		} catch (Exception e) {
			e.printStackTrace();
			IDAMLogger.error(CLASS_NAME, "authenticateUser catch", e,
					true);
		}
		IDAMLogger.trace(CLASS_NAME, "authenticateUser",
				"Exiting authenticateUser method");
		return token;
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (controller methods)
	 * -----------------------------------------------------------------------
	 * This is controller method which performs action on receiving request for
	 * findUser.
	 * 
	 * @param MasterUser
	 *            The bean for the user details.
	 * 
	 * @return : ArrayList of masterUser bean as JSON object
	 * 
	 ***************************************************************************/

	@SuppressWarnings("unchecked")
	@RequestMapping(value = "/findUser", method = RequestMethod.POST, headers = { "Accept=application/json" }, produces = "application/json")
	public @ResponseBody
	ArrayList<MasterUser> findUser(@RequestBody MasterUser masterUser) {
		IDAMLogger.trace(CLASS_NAME, "findUser",
				"Entering findUser method");
		Map<String, String> returnMap = new HashMap<String, String>();
		ArrayList<MasterUser> usersList = null;
		MasterUser user = null;
		try {
			// usersList = (ArrayList) userService.findUsers();
			for (int i = 0; i < usersList.size(); i++) {
				user = (MasterUser) usersList.get(i);
				System.out.println(user.getEmail());
			}
			IDAMLogger.info(CLASS_NAME,
					"findUser : All User List find Successful ", true);
		} catch (Exception e) {
			e.printStackTrace();
			IDAMLogger.error(CLASS_NAME, "findUser catch", e, true);
		}
		IDAMLogger.trace(CLASS_NAME, "findUser",
				"Exiting findUser method");
		return usersList;
	}

	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (controller methods)
	 * -----------------------------------------------------------------------
	 * This is controller method which performs action on receiving request for
	 * perform login.
	 * 
	 * @param MasterUser
	 *            The bean for the user details.
	 * 
	 * @return :
	 * 
	 ***************************************************************************/

	@RequestMapping(value = "/resetPassword", method = RequestMethod.GET, headers = { "Accept=application/json" })
	public @ResponseBody
	String resetPassword(@RequestParam String email) throws Exception {
		IDAMLogger.trace(CLASS_NAME, "resetPassword",
				"Entering resetPassword method");
		String result = "";
		try {
			result = userService.resetPassword(email);
			IDAMLogger.info(CLASS_NAME,
					"deleteUser : User deletion Successful ", true);
		} catch (Exception e) {
			IDAMLogger.error(CLASS_NAME, "resetPassword", e, true);
			return CommonConstants.PASSWORD_RESET_FAILURE;
		}
		IDAMLogger.trace(CLASS_NAME, "resetPassword",
				"Exiting resetPassword method");
		return result;
	}
	
	/*****************************************************************************
	 * -----------------------------------------------------------------------
	 * Public Methods (controller methods)
	 * -----------------------------------------------------------------------
	 * This is controller method which performs action on receiving request for
	 * findUser.
	 * 
	 * @param MasterUser
	 *            The bean for the user details.
	 * 
	 * @return : Boolean whether successful login or invalid login.
	 * 
	 ***************************************************************************/

	@RequestMapping(value = "/resetPasswordIdAM", method = RequestMethod.POST, headers = { "Accept=application/json" })
	public @ResponseBody
	Map<String, HashMap<String, String>>  resetPassword(@RequestBody HashMap<String, String> requestMap) {
		IDAMLogger.trace(CLASS_NAME, "resetPassword",
				"Entering resetPassword method");
		try {
			return userService.resetPassword(requestMap);
		} catch (Exception e) {
			e.printStackTrace();
			IDAMLogger.error(CLASS_NAME, "authenticateUser catch", e,
					true);
		}
		IDAMLogger.trace(CLASS_NAME, "authenticateUser",
				"Exiting authenticateUser method");
		return null;
	}
	
	@RequestMapping(value = "/generateRandomPassword", method = RequestMethod.GET, headers = { "Accept=application/json" })
	public @ResponseBody
	Map<String, String>  generateRandomPassword() {
		IDAMLogger.trace(CLASS_NAME, "generateRandomPassword",
				"Entering generateRandomPassword method");
		try {
			return userService.generateRandomPassword();
		} catch (Exception e) {
			e.printStackTrace();
			IDAMLogger.error(CLASS_NAME, "generateRandomPassword catch", e,
					true);
		}
		IDAMLogger.trace(CLASS_NAME, "generateRandomPassword",
				"Exiting generateRandomPassword method");
		return null;
	}
}