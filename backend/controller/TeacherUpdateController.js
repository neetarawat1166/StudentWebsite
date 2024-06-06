  import { uploadFile } from "../middlewares/uploader.js";
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
        // console.log("updateMod", UpdateModel)
        // console.log("REQBODY", req.body)
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

        // const id = UpdateModel[0]._id;  
        // console.log( "india data", req.body)
        // UpdateModel = await DataScienceModel()

        const newAnnouncement = {
          heading: req.body.newHeading,
          description: req.body.newContent
        };

        // console.log("announcement", newAnnouncement);
        // console.log(UpdateModel[0]);

        UpdateModel[0].announcement.push(newAnnouncement);
        await UpdateModel[0].save();

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

        // const id = UpdateModel[0]._id;

        // UpdateModel = await IOTModel.findByIdAndUpdate(id, req.body, {
        //   new: true,
        //   runValidators: true,
        //   useFindAndModify: false,
        // });

        const newAnnouncement = {
          heading: req.body.newHeading,
          description: req.body.newContent
        };

        // console.log("announcement", newAnnouncement);
        // console.log(UpdateModel[0]);

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

        // console.log("announcement", newAnnouncement);
        // console.log(UpdateModel[0]);

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

        // const id = UpdateModel[0]._id;
        // console.log("daraaraaa", req.body)
        // UpdateModel = await DevOpsModel.findByIdAndUpdate(id, req.body, {
        //   new: true,
        //   runValidators: true,
        //   useFindAndModify: false,
        // });

        const newAnnouncement = {
          heading: req.body.newHeading,
          description: req.body.newContent
        };

        // console.log("announcement", newAnnouncement);
        // console.log(UpdateModel[0]);

        UpdateModel[0].announcement.push(newAnnouncement);
        await UpdateModel[0].save();

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


  export const AddAssignment = async (req, res) => {
    const user = req.user;
    console.log(req.body);
  
    let UpdateModel;
  
    switch (user.course) {
      case "Data Science & Machine Learning with AI":
        UpdateModel = await DataScienceModel.find();
        break;
      case "Embedded Systems & Robotics with IOT":
        UpdateModel = await IOTModel.find();
        break;
      case "Full Stack Web Development":
        UpdateModel = await FullStackModel.find();
        break;
      case "Cloud Computing & DevOps":
        UpdateModel = await DevOpsModel.find();
        break;
      default:
        return res.status(403).json({
          success: false,
          message: "Invalid course.",
        });
    }
  
    if (!UpdateModel || UpdateModel.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Data not found.",
      });
    }
  
    const newAssignment = {
      title: req.body.title,
      task: req.body.task,
      assignDate: req.body.assignDate,
      dueDate: req.body.dueDate,
    };
  
    UpdateModel[0].assignment.push(newAssignment);
    await UpdateModel[0].save();
  
    res.status(200).json({
      success: true,
      message: "Assignment Added",
      newAssignment,
    });
  };
  



  export const fileController = async (req, res) => {
    try {
      const user = req.user;
      let UpdateModel;
  
      switch (user.course) {
        case "Data Science & Machine Learning with AI":
          UpdateModel = DataScienceModel;
          break;
        case "Embedded Systems & Robotics with IOT":
          UpdateModel = IOTModel;
          break;
        case "Full Stack Web Development":
          UpdateModel = FullStackModel;
          break;
        case "Cloud Computing & DevOps":
          UpdateModel = DevOpsModel;
          break;
        default:
          return res.status(403).json({
            success: false,
            message: "Invalid course.",
          });
      }
  
      if (!req.file) {
        return res.status(400).send({
          success: false,
          message: "No file uploaded.",
        });
      }
  
      const upload = await uploadFile(req.file.path);
      if (!upload || !upload.secure_url) {
        throw new Error("File upload failed.");
      }
  
      const updatedRecord = await UpdateModel.updateOne(
        {},
        { $push: { resourses: upload.secure_url } }
      );
  
      if (!updatedRecord) {
        throw new Error("Record not found.");
      }
  
      res.send({
        success: true,
        message: "File uploaded successfully",
        record: updatedRecord,
      });
    } catch (error) {
      console.log("Error in fileController:", error.message);
      res.status(500).send({
        success: false,
        message: "File upload failed",
        error: error.message,
      });
    }
  };
  