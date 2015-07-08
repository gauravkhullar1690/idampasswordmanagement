package com.idam.passwordmanagement.platform.services;

import java.io.UnsupportedEncodingException;
import java.security.Security;
import java.util.Hashtable;

import javax.naming.Context;
import javax.naming.directory.BasicAttribute;
import javax.naming.directory.DirContext;
import javax.naming.directory.InitialDirContext;
import javax.naming.directory.ModificationItem;

public class ADConnection {
	DirContext ldapContext;
	String baseName = ",cn=Users,DC=vsheoran,DC=local";
	String serverIP = "localhost";

	public ADConnection() {
		try {
			Hashtable ldapEnv = new Hashtable(11);
			ldapEnv.put(Context.INITIAL_CONTEXT_FACTORY,
					"com.sun.jndi.ldap.LdapCtxFactory");
			ldapEnv.put(Context.PROVIDER_URL, "ldap://" + serverIP + ":636");
			ldapEnv.put(Context.SECURITY_AUTHENTICATION, "simple");
			ldapEnv.put(Context.SECURITY_PRINCIPAL, "cn=vsheoran"
					+ baseName);
			ldapEnv.put(Context.SECURITY_CREDENTIALS, "Alert1234");
			ldapEnv.put(Context.SECURITY_PROTOCOL, "ssl");
			ldapContext = new InitialDirContext(ldapEnv);
		} catch (Exception e) {
			System.out.println(" bind error: " + e);
			e.printStackTrace();
			System.exit(-1);
		}
	}

	public void updatePassword(String username, String password) {
		try {
			/*String quotedPassword = "\"" + password + "\"";
			char unicodePwd[] = quotedPassword.toCharArray();
			byte pwdArray[] = new byte[unicodePwd.length * 2];
			for (int i = 0; i < unicodePwd.length; i++) {
				pwdArray[i * 2 + 1] = (byte) (unicodePwd[i] >>> 8);
				pwdArray[i * 2 + 0] = (byte) (unicodePwd[i] & 0xff);
			}*/
			ModificationItem[] mods = new ModificationItem[1];
			mods[0] = new ModificationItem(DirContext.REPLACE_ATTRIBUTE,
					new BasicAttribute("UnicodePwd", correctlyFormatPassword(password)));
			ldapContext.modifyAttributes("cn=" + username + baseName, mods);
		} catch (Exception e) {
			System.out.println("update password error: " + e);
			System.exit(-1);
		}
	}
	
	private byte[] correctlyFormatPassword(String password)
		    throws UnsupportedEncodingException
		{
		    // passwords for AD must be surrounded by double quotes
		    // and in UTF-16LE
		    password = "\""+password+"\"";
		    return password.getBytes("UTF-16LE");
		}

	public static void main(String[] args) {
		 
		Security.addProvider(new com.sun.net.ssl.internal.ssl.Provider()); 
		// the keystore that holds trusted root certificates 
		System.setProperty("javax.net.ssl.trustStore", "c:\\myCaCerts.jks"); 
		System.setProperty("javax.net.debug", "all"); 
		ADConnection adc = new ADConnection(); 
		adc.updatePassword("Gaurav Khullar", "pass@word3"); 

	}
	
}
