# Lab 8 — Django Online Shop API

This project is a solution for **Web Development Lab 8**.

## Project structure
- Project folder: `shop-back`
- Django config package: `shop_back`
- App: `api`

> Note: Python package names cannot contain `-`, so the inner Django package uses `shop_back`, while the outer project folder is `shop-back`.

## How to run

### Windows
```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Mac/Linux
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## Endpoints
- `/api/products/`
- `/api/products/<int:id>/`
- `/api/categories/`
- `/api/categories/<int:id>/`
- `/api/categories/<int:id>/products/`
