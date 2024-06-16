import { Router } from "express";

const publicRouter = Router();

publicRouter.get("/", (req, res, next) => {
  return res.render("HomePage");
});

publicRouter.get("/vision-and-mission", (req, res, next) => {
  return res.render("VisionAndMission");
});

publicRouter.get("/membership", (req, res, next) => {
  return res.render("Membership");
});

publicRouter.get("/about", (req, res, next) => {
  return res.render("About");
});

publicRouter.get("/services", (req, res, next) => {
  return res.render("Services");
});

publicRouter.get("/gallery", (req, res, next) => {
  return res.render("Gallery");
});

publicRouter.get("/our-patrons", (req, res, next) => {
  return res.render("OurPatrons");
});

export default publicRouter;
