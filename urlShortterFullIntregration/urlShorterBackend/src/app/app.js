import express from 'express'

import urlRouter from '../router/url.router.js'
import urlModel from '../modules/url.module.js'

const app=express()

app.use(express.json())

app.use("/api/url",urlRouter)

app.get("/:code", async (req, res) => {
  try {
    const { code } = req.params;

    const url = await urlModel.findOne({ shortCode: code });

    if (!url) {
      return res.status(404).json({
        message: "url not found",
      });
    }

    res.redirect(302, url.orginalUrl);
    await urlModel.findOneAndUpdate(
      { shortCode: code },
      {
        $inc: { clicks: 1 },
      }
    );


  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "internal server error",
    });
  }
});

export default app;