/**
 * 
 */
package com.idam.passwordmanagement.model.assignment;

/**
 * @author gaurav.khullar
 *
 */
public class Assignment {
	private Long assignmentId;
	private String docType;
	private String docSize;
	private String docLocation;
	public Long getAssignmentId() {
		return assignmentId;
	}
	public void setAssignmentId(Long assignmentId) {
		this.assignmentId = assignmentId;
	}
	public String getDocType() {
		return docType;
	}
	public void setDocType(String docType) {
		this.docType = docType;
	}
	public String getDocSize() {
		return docSize;
	}
	public void setDocSize(String docSize) {
		this.docSize = docSize;
	}
	public String getDocLocation() {
		return docLocation;
	}
	public void setDocLocation(String docLocation) {
		this.docLocation = docLocation;
	}
	
}
