1. Clone the repo and navigate to backend
git clone <repo-url>
cd vehicle-booking-app/backend

2. Install dependencies

Install dependencies

3. Configure database
Update src/config/config.js with your DB credentials.

4. Create the database
Manually create your database in MySQL (e.g., vehicle_booking_db).

5. Run migrations
npx sequelize-cli db:migrate 

6. Seed initial data (or) can use the vehicle_booking_db.sql file to import the data
npx sequelize-cli db:seed:all

7. Start the backend server
npm start

API Endpoints:

| Method | Endpoint             | Description                     | Request Body / Params                                    | Response                                 |
| ------ | -------------------- | ------------------------------- | -------------------------------------------------------- | ---------------------------------------- |
| GET    | `/api/vehicle-types` | Fetch all vehicle types         | None                                                     | List of vehicle types                    |
| GET    | `/api/vehicles`      | Fetch vehicles filtered by type | Query param: `vehicleTypeId`                             | List of vehicles                         |
| POST   | `/api/bookings`      | Create a booking                | `{ firstName, lastName, vehicleId, startDate, endDate }` | Booking confirmation or error if overlap |
