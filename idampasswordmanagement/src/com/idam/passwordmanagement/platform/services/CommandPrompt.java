/**
 * 
 */
package com.idam.passwordmanagement.platform.services;

import java.io.IOException;
import java.util.HashMap;

/**
 * @author vsheoran
 *
 */
public class CommandPrompt {
	
	public HashMap<String, String> exec(String resetPassword,String helpDesk){
		HashMap<String, String> result = new HashMap<String, String>();
		try{   
			System.out.println("AD: "+ resetPassword);
			if(helpDesk.equalsIgnoreCase("true")){
				Process p = Runtime.getRuntime().exec(new String[]{"cmd.exe", "/c", "C:\\Users\\vsheoran\\Desktop\\test.vbs "+resetPassword+" true"});
			    p.waitFor();
			} else {
				Process p = Runtime.getRuntime().exec(new String[]{"cmd.exe", "/c", "C:\\Users\\vsheoran\\Desktop\\test.vbs "+resetPassword+" false"});
			    p.waitFor();
			}
		    result.put("msg", "Sucess");
			result.put("status", "Success");
			return result;
		}catch( IOException e ){
			result.put("msg", e.getMessage());
			result.put("status", "Failed");
			return result;

		}catch( InterruptedException e ){
			result.put("msg", e.getMessage());
			result.put("status", "Failed");
			return result;
		}

	}
	
	public static void main(String[] args) {

		CommandPrompt cDB = new CommandPrompt();
		cDB.exec("P@ssw0rd","true");

	}
}
