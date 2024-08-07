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
          In case of invisibility, click on this link{" "}
          <a href="/resume.pdf" className="text-blue-600">to the PDF!</a>
        </p>
      </object>
    </div>
  );
};

export default MyDocument;
