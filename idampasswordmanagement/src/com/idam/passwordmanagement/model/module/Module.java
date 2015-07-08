/**
 * 
 */
package com.idam.passwordmanagement.model.module;

/**
 * @author gaurav.khullar
 *
 */
import java.util.HashSet;
import java.util.Set;

import com.idam.passwordmanagement.model.subject.Subject;
 
public class Module {
 
    private Long moduleId;
    private Set<Subject> subjects = new HashSet<Subject>();
    
     
    public Long getModuleId() {
		return moduleId;
	}


	public void setModuleId(Long moduleId) {
		this.moduleId = moduleId;
	}


	public Set<Subject> getSubjects() {
		return subjects;
	}


	public void setSubjects(Set<Subject> subjects) {
		this.subjects = subjects;
	}


	public Module() {
    }
 
}