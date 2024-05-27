  import { DataScienceModel } from "../models/DataScienceUpdateModel.js";
  import { DevOpsModel } from "../models/DevOpsUpdateModel.js";
  import { FullStackModel } from "../models/FullStackUpdateModel.js";
  import { IOTModel } from "../models/IOTUpdateModel.js";

  // Update Post  
  export const TeacherUpdateData = async (req, res) => {
    const user = req.user;
    //console.log("user heyaa",user)
  
    if (user.course == "Data Science & Machine Learning with AI") {
      try {
        // Find the post by ID
        let UpdateModel = await DataScienceModel.find();
        // console.log(UpdateModel)
        if (!UpdateModel) {
          return res.status(404).json({
            success: false,
            message: "Data not found.",
          });
        }

        const id = UpdateModel[0]._id;

        UpdateModel = await DataScienceModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });

        res.status(200).json({
          success: true,
          message: "Data Updated",
          UpdateModel,
        });
      } catch (error) {
        // Handle unexpected errors
        console.error("Unable to update data:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error.",
        });
      }
    }

    if (user.course == "Embedded Systems & Robotics with IOT") {
      try {
        // Find the post by ID
        let UpdateModel = await IOTModel.find();
        // console.log(UpdateModel)
        if (!UpdateModel) {
          return res.status(404).json({
            success: false,
            message: "Data not found.",
          });
        }

        const id = UpdateModel[0]._id;

        UpdateModel = await IOTModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });

        res.status(200).json({
          success: true,
          message: "Data Updated",
          UpdateModel,
        });
      } catch (error) {
        // Handle unexpected errors
        console.error("Unable to update Data", error);
        res.status(500).json({
          success: false,
          message: "Internal server error.",
        });
      }
    }

    if (user.course == "Full Stack Web Development") {
      try {
        // Find the post by ID
        let UpdateModel = await FullStackModel.find();
        // console.log(UpdateModel)
        if (!UpdateModel) {
          return res.status(404).json({
            success: false,
            message: "Data not found.",
          });
        }

        const id = UpdateModel[0]._id;

        UpdateModel = await FullStackModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });

        res.status(200).json({
          success: true,
          message: "Data Updated",
          UpdateModel,
        });
      } catch (error) {
        // Handle unexpected errors
        console.error("Unable to update Data", error);
        res.status(500).json({
          success: false,
          message: "Internal server error.",
        });
      }
      // return res.send("ok check kar");
    }

    if (user.course == "Cloud Computing & DevOps") {
      try {
        // Find the post by ID
        let UpdateModel = await DevOpsModel.find();
        // console.log(UpdateModel)
        if (!UpdateModel) {
          return res.status(404).json({
            success: false,
            message: "Data not found.",
          });
        }

        const id = UpdateModel[0]._id;
        console.log("daraaraaa", req.body)
        UpdateModel = await DevOpsModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });

        res.status(200).json({
          success: true,
          message: "Data Updated",
          UpdateModel,
        });
      } catch (error) {
        // Handle unexpected errors
        console.error("Unable to update data", error);
        res.status(500).json({
          success: false,
          message: "Internal server error.",
        });
      }
    }
  };


  export const AddAnnouncement = async (req, res) => {
    const user = req.user;
    console.log("india user",user)
  
    if (user.course == "Data Science & Machine Learning with AI") {
      try {
        // Find the post by ID
        let UpdateModel = await DataScienceModel.find();
        // console.log(UpdateModel)
        if (!UpdateModel) {
          return res.status(404).json({
            success: false,
            message: "Data not found.",
          });
        }

        const id = UpdateModel[0]._id;  
        console.log( "india data", req.body)
        // UpdateModel = await DataScienceModel()

        res.status(200).json({
          success: true,
          message: "Data Updated",
          UpdateModel,
        });
      } catch (error) {
        // Handle unexpected errors
        console.error("Unable to update data:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error.",
        });
      }
    }

    if (user.course == "Embedded Systems & Robotics with IOT") {
      try {
        // Find the post by ID
        let UpdateModel = await IOTModel.find();
        // console.log(UpdateModel)
        if (!UpdateModel) {
          return res.status(404).json({
            success: false,
            message: "Data not found.",
          });
        }

        const id = UpdateModel[0]._id;

        UpdateModel = await IOTModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });

        res.status(200).json({
          success: true,
          message: "Data Updated",
          UpdateModel,
        });
      } catch (error) {
        // Handle unexpected errors
        console.error("Unable to update Data", error);
        res.status(500).json({
          success: false,
          message: "Internal server error.",
        });
      }
    }

    if (user.course == "Full Stack Web Development") {
      try {
        // Find the post by ID
        let UpdateModel = await FullStackModel.find();
        // console.log(UpdateModel)
        if (!UpdateModel) {
          return res.status(404).json({
            success: false,
            message: "Data not found.",
          });
        }

        const id = UpdateModel[0]._id;
        console.log("india full" , req.body)

        const newAnnouncement = {
          heading: req.body.newHeading,
          description: req.body.newContent
        };

        console.log("announcement", newAnnouncement);
        console.log(UpdateModel[0]);

        UpdateModel[0].announcement.push(newAnnouncement);
        await UpdateModel[0].save();
        

        res.status(200).json({
          success: true,
          message: "Data Updated",
          UpdateModel,
        });
      } catch (error) {
        // Handle unexpected errors
        console.error("Unable to update Data", error);
        res.status(500).json({
          success: false,
          message: "Internal server error.",
        });
      }
      // return res.send("ok check kar");
    }

    if (user.course == "Cloud Computing & DevOps") {
      try {
        // Find the post by ID
        let UpdateModel = await DevOpsModel.find();
        // console.log(UpdateModel)
        if (!UpdateModel) {
          return res.status(404).json({
            success: false,
            message: "Data not found.",
          });
        }

        const id = UpdateModel[0]._id;
        console.log("daraaraaa", req.body)
        UpdateModel = await DevOpsModel.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
          useFindAndModify: false,
        });

        res.status(200).json({
          success: true,
          message: "Data Updated",
          UpdateModel,
        });
      } catch (error) {
        // Handle unexpected errors
        console.error("Unable to update data", error);
        res.status(500).json({
          success: false,
          message: "Internal server error.",
        });
      }
    }
  }