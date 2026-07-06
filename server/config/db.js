import chalk from "chalk";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://jenilkothiyadev_db_user:IIsarvzp5ttrc2Gn@cluster0.vu8dlpe.mongodb.net/Portfolio");
    
    console.log(chalk.green("✓ MongoDB Connected Successfully"));
  } catch (error) {
    console.log(error);
    console.log(error.stack);
    
    console.error(chalk.red(`database error => \n${error}`));
    process.exit(1);
  }
};
