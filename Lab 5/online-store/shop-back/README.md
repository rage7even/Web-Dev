# shop-back

Django backend for Lab 8 based on the Angular `online-store` project from Lab 5.

## Setup

```powershell
python -m venv venv
.\venv\bin\python.exe -m pip install -r requirements.txt
.\venv\bin\python.exe manage.py migrate
.\venv\bin\python.exe manage.py runserver
```

## API endpoints

- `/api/products/`
- `/api/products/<int:id>/`
- `/api/categories/`
- `/api/categories/<int:id>/`
- `/api/categories/<int:id>/products/`
