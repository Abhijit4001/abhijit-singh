---
title: "FastAPI + MongoDB: Building the Agri-Rent Backend"
date: "2025-01-10"
summary: "How I designed the API and database layer for Agri-Rent, an agricultural equipment rental platform, using FastAPI, Pydantic, and MongoDB."
tags: ["FastAPI", "MongoDB", "Pydantic", "Python", "REST API", "Backend"]
author: "Abhijit Singh"
---

# FastAPI + MongoDB: Building the Agri-Rent Backend

Agri-Rent is a platform I built to help farmers rent agricultural equipment. The idea came from noticing that small-scale farmers often need specialized equipment for just a few days but can't justify the purchase cost.

## Why FastAPI?

FastAPI gives you automatic OpenAPI docs, async support, and Pydantic integration out of the box. For a project where data validation is critical (equipment availability, pricing, user details), this combination is hard to beat.

## Data Model

The core entities are:

- **Equipment** – name, category, price per day, availability status, owner
- **Rental** – equipment ID, renter ID, start date, end date, total cost
- **User** – name, location, contact, role (farmer / owner)

```python
from pydantic import BaseModel
from datetime import date

class RentalCreate(BaseModel):
    equipment_id: str
    renter_id: str
    start_date: date
    end_date: date
```

## MongoDB as the Database

MongoDB's flexible schema made it easy to iterate on the data model early in development. The document structure maps naturally to the rental concept, where equipment details are embedded rather than joined.

## Streamlit Frontend

Rather than building a full React frontend, I used Streamlit to create a functional dashboard. It's not the prettiest solution, but it let me focus on the core logic and ship faster.

## Lessons Learned

- **Pydantic validators** saved me from bugs I would have caught much later.
- **MongoDB Atlas** is easy to set up but plan your indexes early—queries without indexes are slow.
- **Streamlit** is great for internal tools and prototypes, but hits its limits fast for production UIs.

The project is available on GitHub. Feedback welcome!
