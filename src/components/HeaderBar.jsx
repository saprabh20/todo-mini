"use client";

import { Navbar } from "flowbite-react";

import React from 'react'

const HeaderBar = () => {
  return (
      <Navbar
          fluid
          rounded
          className="flex items-center justify-center w-[100%] bg-[#E5D9F2]"
      >
          <Navbar.Brand>
              <h1 className="self-center text-3xl font-bold text-[#A294F9] hover:text-violet-500">
                  Todo App
              </h1>
          </Navbar.Brand>
      </Navbar>
  );
}

export default HeaderBar;
