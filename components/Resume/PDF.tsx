"use client";
import React, { useState } from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => {
  return (
    <div className="h-screen mt-10">
      <object
        data="/resume.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p>
          Alternative text - include a link{" "}
          <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default MyDocument;
