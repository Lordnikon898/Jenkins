package com.hrm.practice;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.Map;

import org.junit.Test;

public class JDBC {

	String dbUser = "syntax_hrm";

	String dbPass = "syntaxhrm123";
	// jdbc:driver type:hostname:port/db name
	String dbUrl = "jdbc:mysql://166.62.36.207:3306/syntaxhrm_mysql";

	public void abc() throws SQLException {
		Connection con = DriverManager.getConnection(dbUrl, dbUser, dbPass);
		Statement st = con.createStatement();
		ResultSet rs = st.executeQuery("select * from ohrm_job_title");
		ArrayList<String> list = new ArrayList<>();
		while (rs.next()) {
			list.add(rs.getString("job_title"));
		}

		for (String one : list) {
			System.out.println(one);
		}
		rs.close();
		st.close();
		con.close();
	}

	@Test
	public void nat() throws SQLException {
		Connection con = DriverManager.getConnection(dbUrl, dbUser, dbPass);
		Statement st = con.createStatement();
		ResultSet rs = st
				.executeQuery("select id as 'nationality id', name as 'nationality name' from ohrm_nationality");
		ResultSetMetaData mrs = rs.getMetaData();
		ArrayList<Map<String, String>> list = new ArrayList<>();
		Map<String, String> map;
		while (rs.next()) {
			map = new LinkedHashMap<>();
			for (int i = 1; i <= mrs.getColumnCount(); i++) {

				map.put(mrs.getColumnName(i), rs.getObject(i).toString());

			}
			list.add(map);
		}
		System.out.println(list);

	}

}
