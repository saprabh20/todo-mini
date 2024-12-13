"use client";

import { Navbar } from "flowbite-react";

import React from 'react'

const HeaderBar = () => {
  return (
      <Navbar fluid rounded className="flex items-center justify-center">
          <Navbar.Brand>
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  Todo App
              </span>
          </Navbar.Brand>
      </Navbar>
  );
}

export default HeaderBar;
