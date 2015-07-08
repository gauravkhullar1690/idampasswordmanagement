/**
 * 
 */
package com.idam.passwordmanagement.model.group;

import com.idam.passwordmanagement.model.user.MasterUser;

/**
 * @author gaurav.khullar
 *
 */
public class Group {
	private Long groupId;
	private String name;
	private String description;
	private MasterUser groupAdmin;
	public Long getGroupId() {
		return groupId;
	}
	public void setGroupId(Long groupId) {
		this.groupId = groupId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public MasterUser getGroupAdmin() {
		return groupAdmin;
	}
	public void setGroupAdmin(MasterUser groupAdmin) {
		this.groupAdmin = groupAdmin;
	}
	
	
}
