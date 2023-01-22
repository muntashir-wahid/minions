const Minion = require("./../models/minionModel");

exports.createMinion = async (req, res) => {
  try {
    const minion = await Minion.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        minion,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: err,
    });
  }
};

exports.getMinions = async (req, res) => {
  try {
    const minions = await Minion.find().select("-__v");

    res.status(200).json({
      status: "success",
      result: minions.length,
      data: {
        minions,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: {
        err,
      },
    });
  }
};

exports.getMinion = async (req, res) => {
  try {
    const minion = await Minion.findById(req.params.id).select("-__v");

    res.status(200).json({
      status: "success",
      data: {
        minion,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: {
        err,
      },
    });
  }
};

exports.deleteMinion = async (req, res) => {
  try {
    await Minion.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: {
        err,
      },
    });
  }
};

exports.updateMinion = async (req, res) => {
  try {
    const minion = await Minion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-__v");

    res.status(200).json({
      status: "success",
      data: {
        minion,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      error: {
        err,
      },
    });
  }
};
