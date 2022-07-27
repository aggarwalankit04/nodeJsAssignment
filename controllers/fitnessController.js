const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

let sampleData = {
  counter: 103,
  data: [
    {
      _id: 101,
      date: "2022-07-27",
      startTime: "13:30",
      EndTime: "14:30",
      duration: "60",
      trainerName: "Manju",
      title: "FatLoss",
      desc: "Purely facinating fatloss session contains cardio and muscel strengthing",
    },
    {
      _id: 102,
      date: "2022-07-27",
      startTime: "18:00",
      EndTime: "19:30",
      duration: "90",
      trainerName: "Manjunath",
      title: "Body Tonnning",
      desc: "Purely facinating body tonning program for intermidiate level professionals",
    },
    {
      _id: 103,
      date: "2022-07-27",
      startTime: "18:00",
      EndTime: "19:30",
      duration: "90",
      trainerName: "Rahul",
      title: "Body Training",
      desc: "Purely facinating body tonning program for intermidiate level professionals",
    },
  ],
};

exports.getAllRecords = catchAsync(async (req, res, next) => {
  const dataArray = await sampleData;

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: sampleData.length,
    data: {
      dataArray,
    },
  });
});

exports.createNewFitnessClass = catchAsync(async (req, res, next) => {
  let newData = req.body;
  console.log(newData.title !== "");
  if (newData.title == "" && newData.desc === "") {
    return next(new AppError("Please provide title and description", 400));
  }

  sampleData.data.push(newData);
  sampleData.counter = sampleData.counter + 1;
  newData._id = sampleData.counter;
  res.status(201).json({
    status: "success",
    data: {
      newData,
    },
  });
});

exports.getOneRecord = catchAsync(async (req, res, next) => {
  const dataArray = sampleData.data;
  let newData = await dataArray.find(function (item) {
    return item._id == req.params.id;
  });

  if (!newData) {
    return next(new AppError("No fitness class found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      newData,
    },
  });
});

exports.updateData = catchAsync(async (req, res, next) => {
  const dataArray = sampleData.data;
  let newData = await dataArray.findIndex(function (item) {
    return item._id == req.params.id;
  });

  if (newData < 0) {
    return next(new AppError("No fitness class found with that ID", 404));
  }

  if (req.body.title == "" && req.body.desc === "") {
    return next(new AppError("Please provide title and description", 400));
  }

  const finalUpdatedDate = { ...dataArray[newData], ...req.body };

  res.status(200).json({
    status: "success",
    data: {
      finalUpdatedDate,
    },
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  const dataArray = sampleData.data;
  const newData = await dataArray.splice(
    dataArray.findIndex(function (item) {
      return item._id == req.params.id;
    }),
    1
  );

  if (newData < 0) {
    return next(new AppError("No fitness class found with that ID", 404));
  }

  sampleData.counter = sampleData.counter - 1;

  res.status(204).json({
    status: "success",
    data: null,
  });
});
