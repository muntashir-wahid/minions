const Minion = require("./../models/minionModel");

exports.createMinion = async (req, res, next) => {
  try {
    const minion = await Minion.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        minion,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.getMinions = async (req, res, next) => {
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
    next(err);
  }
};

exports.getMinion = async (req, res, next) => {
  try {
    const minion = await Minion.findById(req.params.id).select("-__v");

    if (!minion) {
      const err = new Error("Can't find minion with the id");
      return next(err);
    }

    res.status(200).json({
      status: "success",
      data: {
        minion,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteMinion = async (req, res, next) => {
  try {
    const minion = await Minion.findByIdAndDelete(req.params.id);

    if (!minion) {
      const err = new Error("Can't find minion with the id");
      return next(err);
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateMinion = async (req, res, next) => {
  try {
    const minion = await Minion.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).select("-__v");

    if (!minion) {
      const err = new Error("Can't find minion with the id");
      return next(err);
    }

    res.status(200).json({
      status: "success",
      data: {
        minion,
      },
    });
  } catch (err) {
    next(err);
  }
};
