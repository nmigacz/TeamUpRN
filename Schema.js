import React, { Component } from "react";

class Profile {
  /**
   * Creating a User profile
   * @param {Object} profile - The User profile to be made
   * @param {string} profile.username - Username of the profile
   * @param {string} profile.role - The role of the user
   * @param {string} profile.rank - The rank of the user
   */
   
  constructor({
    username,
    role,
    rank,
  }) {
    this.username = Username;
    this.role = Role;
	this.rank = Rank;
  }
  
  // TODO: implement schema
  
  static schema = {
  name: "Profile",
  properties: {
    Username: "string", 
    Role: "string", /* main roles can be support, entry fragger, flex */
	Rank: "string",
  },
  primaryKey: "Username",
};

export { Profile };