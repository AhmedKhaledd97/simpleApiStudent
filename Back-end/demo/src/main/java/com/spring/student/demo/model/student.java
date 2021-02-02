package com.spring.student.demo.model;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.spring.student.demo.model.Enums.Gender;
@Entity(name = "sudent")
public class student {
	public  student() {
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "full_name")
	private String full_name;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "gender")
	private Gender gender;
	
	@Column(name = "age")
	private String age;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "phone_number")
	private String phone_number;
	
	
	public student(String full_name, Gender gender, String age, String address, String phone_number) {
		
		this.full_name = full_name;
		this.gender = gender;
		this.age = age;
		this.address = address;
		this.phone_number = phone_number;
		
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return full_name;
	}
	public void setName(String name) {
		this.full_name = name;
	}
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone_number;
	}
	public void setPhone(String phone) {
		this.phone_number = phone;
	}
	
	
	

}
