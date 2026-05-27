import { UserRole } from "../modules/user/user.interface";
import User from "../modules/user/user.model";

const adminUser = {
  email: "admin@swiftcart.com",
  password: "admin123",
  name: "Admin",
  role: UserRole.ADMIN,
  clientInfo: {
    device: "pc",
    browser: "Unknown",
    ipAddress: "127.0.0.1",
    pcName: "localhost",
    os: "Unknown",
    userAgent: "Seed Script",
  },
};

const seedAdmin = async () => {
  try {
    const isAdminExist = await User.findOne({ role: UserRole.ADMIN });

    if (!isAdminExist) {
      await User.create(adminUser);
      console.log("Admin user created successfully.");
    } else {
      console.log("Admin user already exists.");
    }
  } catch (error) {
    console.error("Error seeding admin user:", error);
  }
};

export default seedAdmin;





// const normalUser = {
//   email: "user@gmail.com",
//   password: "user123",
//   name: "User",
//   role: UserRole.USER,
//   clientInfo: {
//     device: "pc",
//     browser: "Unknown",
//     ipAddress: "127.0.0.1",
//     pcName: "localhost",
//     os: "Unknown",
//     userAgent: "Seed Script",
//   },
// };

// const seedAdmin = async () => {
//   try {
//     const isUserExists = await User.findOne({ role: UserRole.USER });

//     if (!isUserExists) {
//       await User.create(normalUser);
//       console.log("Normal user created successfully.");
//     } else {
//       console.log("Normal user already exists.");
//     }
//   } catch (error) {
//     console.error("Error seeding normal user:", error);
//   }
// };


// export default seedAdmin;
