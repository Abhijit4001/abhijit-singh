---
title: "Building a Face Recognition Attendance System with OpenCV"
date: "2024-09-15"
summary: "A walkthrough of how I built an AI-powered attendance system using Python, OpenCV for facial recognition, and MySQL for student record management."
tags: ["Python", "OpenCV", "Computer Vision", "AI", "MySQL"]
author: "Abhijit Singh"
---

# Building a Face Recognition Attendance System with OpenCV

During my internship at NIELIT, I got the opportunity to apply computer vision concepts to a real problem: automating student attendance. Here's how the system works.

## The Problem

Manual attendance is slow, error-prone, and easy to manipulate. Facial recognition removes the human bottleneck while adding a layer of accuracy.

## Tech Stack

- **Python** – core language
- **OpenCV** – face detection and recognition
- **MySQL** – student record storage
- **Tkinter** – desktop GUI

## How It Works

1. A camera captures frames from a live video stream.
2. OpenCV's Haar Cascade classifier detects faces in each frame.
3. A trained recognizer (LBPH) compares the detected face against the database.
4. On a match, the attendance record is written to MySQL with a timestamp.

## Key Learnings

- Real-time video processing requires careful frame-rate management.
- Lighting conditions significantly impact recognition accuracy.
- Database indexing on student ID makes lookup nearly instantaneous even with hundreds of records.

This project cemented my interest in applied AI—the satisfaction of seeing a name appear on screen in real time as someone walks past a camera is hard to beat.
