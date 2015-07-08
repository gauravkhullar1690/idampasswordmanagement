/**
 * 
 */
package com.idam.passwordmanagement.platform.dao;

import java.util.List;
import java.util.Map;

import org.hibernate.HibernateException;

import com.idam.passwordmanagement.model.user.MasterUser;
import com.idam.passwordmanagement.model.user.UserDetails;
import com.idam.passwordmanagement.platform.hbm.AbstractDataAccessObject;

/**
 * @author gaurav.khullar
 *
 */
public class UserDAO extends AbstractDataAccessObject {
	public MasterUser saveMasterUser(MasterUser masterUser) throws HibernateException,Exception{
		return (MasterUser)persistenceService.save(masterUser);
	}
	public UserDetails saveUserDetails(UserDetails userDetails) throws HibernateException,Exception {
		return (UserDetails)persistenceService.save(userDetails);
	}
	
	public void deleteUser(MasterUser masterUser) throws HibernateException,Exception {
		persistenceService.remove(masterUser);
		
	}
	
	public void updateMasterUser(MasterUser masterUser) throws HibernateException,Exception {
		persistenceService.saveOrUpdate(masterUser);
	}
	
	public void updateMasterUser(String emailId,Map<String, Object> properties) throws HibernateException,Exception {
		persistenceService.updateEntity(MasterUser.class, "email", emailId, properties);
	}

	public List<MasterUser> findMasterUserByEmail(String email) throws HibernateException,Exception {
		return (List<MasterUser>)persistenceService.executeQuery("from "+MasterUser.class.getName()+" mu where mu.email=?",new Object[] {email});
	}
}
