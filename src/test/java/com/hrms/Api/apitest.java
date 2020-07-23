package com.hrms.Api;

import static io.restassured.RestAssured.given;

import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import static org.hamcrest.Matchers.*;
//import org.apache.hc.core5.http.ContentType;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class apitest {
	static String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1OTUxNjk0MjcsImlzcyI6ImxvY2FsaG9zdCIsImV4cCI6MTU5NTIxMjYyNywidXNlcklkIjoiMTEwMSJ9.DZGq0OVz1zbW_ahjPi59sk0SO1ea1-HJHIEIMuGeMls";
	static String baseURI = RestAssured.baseURI = "http://18.232.148.34/syntaxapi/api";
	static String empId;
	///////////////////////

	// @Test
	public void asample2() {
		RequestSpecification getOneEmployeeRequest = given().header("Content-Type", ContentType.JSON)
				.header("Authorization", token)
				.body("{\n" + "    \"emp_firstname\": \"Ivann\",\n" + "    \"emp_lastname\": \"Ivannovv\",\n"
						+ "    \"emp_middle_name\": \"Los\",\n" + "    \"emp_gender\": \"M\",\n"
						+ "    \"emp_birthday\": \"2010-07-11\",\n" + "    \"emp_status\": \"Employee\",\n"
						+ "    \"emp_job_title\": \"Cloud Consultant\"\n" + "}");

		Response createEmp = getOneEmployeeRequest.when().post("/createEmployee.php");
		createEmp.prettyPrint();

		empId = createEmp.jsonPath().getString("Employee[0].employee_id");
		System.out.println(empId);

		createEmp.then().assertThat().statusCode(201);
		createEmp.then().assertThat().body("Message", equalTo("Entry Created"));
		createEmp.then().assertThat().body("Employee[0].emp_lastname", equalTo("Ivannovv"));
		createEmp.then().header("Content-Type", "application/json");
		System.out.println(empId + "Saved");
	}

	// @Test
	public void example1() {

//		RequestSpecification req = given().header("Content-type", "application/json").header("Autorization", token)
//				.queryParam("employee_id", "16004A").log().all();
//		Response getOne = req.when().get("/getOneEmployee.php");
//		getOne.prettyPrint();

		RestAssured.baseURI = "http://18.232.148.34/syntaxapi/api";
		RequestSpecification getOneEmployeeRequest = given().header("Content-Type", "application/json")
				.header("Authorization", token).queryParam("employee_id", "16004A").log().all();
		Response getOneEmployeeResponse = getOneEmployeeRequest.when().get("/getOneEmployee.php");
		getOneEmployeeResponse.prettyPrint();
		// String response = getOneEmployeeResponse.body().asString();
		// System.out.println(response);
		getOneEmployeeResponse.then().assertThat().statusCode(200);

	}

	// @Test
	public void bsample3() {
		System.out.println("Saved one " + empId);
		RequestSpecification getEmp = given().header("Content-Type", "application/json").header("Authorization", token)
				.queryParam("employee_id", "16004A");
		Response getResp = getEmp.when().log().all().get("/getOneEmployee.php");
		String respon = getResp.prettyPrint();
		empId = getResp.body().jsonPath().getString("employee[0].employee_id");
		boolean idMatch = empId.equalsIgnoreCase(empId);
		Assert.assertTrue(idMatch);
		System.out.println("Good");

		JsonPath js = new JsonPath(respon);
		String empLid = js.getString("employee[0].employee_id");
		String fN = js.getString("employee[0].emp_firsname");
		String lN = js.getString("employee[0].emp_lastname");
		String mN = js.getString("employee[0].emp_middle_name");
		String bD = js.getString("employee[0].emp_birthday");
		String jT = js.getString("employee[0].emp_jobTitle");
		String g = js.getString("employee[0].emp_gender");
		String st = js.getString("employee[0].emp_status");

		Assert.assertEquals(empLid, empId);

	}

	@Test
	public void bsample4() {
		System.out.println("Saved one " + empId);
		RequestSpecification getEmps = given().header("Content-Type", "application/json").header("Authorization",
				token);
		Response getResp = getEmps.when().get("/getAllEmployees.php");
		String respon = getResp.body().asString();
		JsonPath js = new JsonPath(respon);
		int size = js.getInt("Employees.size()");
		System.out.println(size);
		
		for (int i = 0; i < (size); i++) {

			System.out.println(js.getString("Employees[" + i + "].employee_id"));

		}

	}
}
