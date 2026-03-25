# Lab 8 Django Backend

Backend API for the Angular online store from Labs 4 and 5.

## Setup

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py seed_data
python manage.py runserver
```

## Endpoints

- `/api/products/`
- `/api/products/<int:id>/`
- `/api/categories/`
- `/api/categories/<int:id>/`
- `/api/categories/<int:id>/products/`
