/**
 * 
 */
package com.idam.passwordmanagement.model.subject;

import java.util.HashSet;
import java.util.Set;

import com.idam.passwordmanagement.model.module.Module;
import com.idam.passwordmanagement.model.user.MasterUser;

/**
 * @author gaurav.khullar
 * 
 */
public class Subject {
	private Long subjectId;
	private String name;
	private String description;
	private Set<Module> modules = new HashSet<Module>();
	private MasterUser faculty;

	public Long getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(Long subjectId) {
		this.subjectId = subjectId;
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

	public Set<Module> getModules() {
		return modules;
	}

	public void setModules(Set<Module> modules) {
		this.modules = modules;
	}

	public MasterUser getFaculty() {
		return faculty;
	}

	public void setFaculty(MasterUser faculty) {
		this.faculty = faculty;
	}

}
