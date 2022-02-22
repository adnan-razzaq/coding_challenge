import { Fragment, ReactElement, useState, useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import Paper from "@mui/material/Paper";
import { Startup } from "../../Types/Startup";

// @ts-ignore
export default function StartupList(): ReactElement {
  const [startUpData, setstartUpData] = useState<Startup[]>([]);

  useEffect(() => {
    const getData = async function () {
      let response = await StartupHttpService.getStartups();
      console.log(response);
      // @ts-ignore
      setstartUpData(response);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Hello from componenet</h1>

      {startUpData.map(
        (item: {
          name: string;
          employees: string;
          dateFounded: any;
          totalFunding: any;
          currentInvestmentStage: any;
          shortDescription: any;
        }) => {
          const {
            name,
            employees,
            dateFounded,
            totalFunding,
            currentInvestmentStage,
            shortDescription,
          } = item;

          return (
            <Fragment>
              <Paper elevation={3}>
                <CardContent>
                  <Typography variant="h4" component="div">
                    {name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {`Founded:${dateFounded}|${employees}employees |${totalFunding}$ |${currentInvestmentStage}Series A`}
                  </Typography>

                  <Typography variant="body2">{shortDescription}</Typography>
                </CardContent>
              </Paper>
            </Fragment>
          );
        }
      )}
    </>
  );
}
