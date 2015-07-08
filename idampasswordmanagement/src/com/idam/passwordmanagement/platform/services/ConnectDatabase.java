package com.idam.passwordmanagement.platform.services;

import java.sql.*;
import java.util.HashMap;

public class ConnectDatabase {

	Connection dbConnection = null;

	String dbName = "Courion";
	String serverip = "localhost";
	String serverport = "1433";
	String url = "jdbc:sqlserver://" + serverip +"\\MSSQLSERVER"+ ":"+serverport+";databaseName="
			+ dbName + "";
	String userName = "sa";
	String password = "System@123";
	final String driverName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
	Statement statement = null;
	ResultSet rs = null;
	int updateQuery = 0;

	public HashMap<String, String> getConnection(String resetPassword,String helpDesk) {
		HashMap<String, String> result = new HashMap<String, String>();
		System.out.println(url);
		try {
			Class.forName(driverName).newInstance();
			System.out.println("DB: "+ resetPassword);
			dbConnection = DriverManager.getConnection(url, userName, password);
			System.out.println(DriverManager.getDrivers());

			statement = dbConnection.createStatement();
			String QueryString = "";
			if(helpDesk.equalsIgnoreCase("true")){
				System.out.println("Support Staff: "+ resetPassword);
				 QueryString = "ALTER LOGIN gkhullar WITH PASSWORD = '"+resetPassword+"' MUST_CHANGE, CHECK_EXPIRATION = ON;";
			} else{
				 QueryString = "ALTER LOGIN gkhullar WITH PASSWORD = '"+resetPassword+"';";
			}
			updateQuery = statement.executeUpdate(QueryString);

			if (updateQuery != 0) {
				System.out.println("success" + updateQuery);
			}
			statement.close();
			dbConnection.close();
		} catch (Exception e) {
			result.put("msg", e.getMessage());
			result.put("status", "Failed");
			return result;
		}
		result.put("msg", "Sucess");
		result.put("status", "Success");
		return result;

	}

	public static void main(String[] args) {

		ConnectDatabase cDB = new ConnectDatabase();
		cDB.getConnection("Test@123","true");

	}

}
