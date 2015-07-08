/**
 * 
 */
package com.idam.passwordmanagement.transiet;

import com.idam.passwordmanagement.model.user.MasterUser;
import com.idam.passwordmanagement.model.user.UserDetails;

/**
 * @author gaurav.khullar
 *
 */
public class UsersTraveller {
	private MasterUser masterUser;
	private UserDetails userDetails;
	public MasterUser getMasterUser() {
		return masterUser;
	}
	public void setMasterUser(MasterUser masterUser) {
		this.masterUser = masterUser;
	}
	public UserDetails getUserDetails() {
		return userDetails;
	}
	public void setUserDetails(UserDetails userDetails) {
		this.userDetails = userDetails;
	}
	
}
