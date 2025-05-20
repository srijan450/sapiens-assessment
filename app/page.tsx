"use client";
import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import Link from "next/link";

const Posts = () => {

  return (
    <>
    <Link href="/post">Post</Link>
    <Link href="/user-post">User Post</Link>
    </>
    );
};

export default Posts;
