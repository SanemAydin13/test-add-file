import React, { useState } from "react";
import users from "../../users.json";
import {
  Avatar,
  Box,
  Button,
  Chip,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  FormHelperText,
  Modal,
  Typography,
  Autocomplete,
  Select,
  Snackbar,
  SnackbarCloseReason,
} from "@mui/material";
import GetAppRoundedIcon from "@mui/icons-material/GetAppRounded";
import PublishRoundedIcon from "@mui/icons-material/PublishRounded";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import dayjs, { Dayjs } from "dayjs";

// Define the types for the form values and user
interface FormValues {
  statuteAct: string;
  formNo: string;
  particulars: string;
  date: Dayjs | null;
  department: string;
}

interface User {
  name: string;
  department: string;
}

// Minimum and maximum dates
const minDate = dayjs();
const maxDate = dayjs().add(100, "year");

// Validation schema
const validationSchema = Yup.object({
  statuteAct: Yup.string()
    .required("Statute/Act is required")
    .min(5, "Statute/Act must be at least 5 characters long")
    .max(50, "Statute/Act cannot be longer than 50 characters"),
  formNo: Yup.string().required("Form/Challan No. is required"),
  particulars: Yup.string()
    .required("Particulars are required")
    .max(200, "Particulars cannot be longer than 200 characters"),
  date: Yup.date()
    .required("Date is required")
    .min(minDate, `Date cannot be before ${minDate.format("MM/DD/YYYY")}`)
    .max(maxDate, `Date cannot be after ${maxDate.format("MM/DD/YYYY")}`)
    .nullable(),
  department: Yup.string().required("Department is required"),
});

// const props = { name: "Gopika", department: "F&A" };

const AddFilings: React.FC = (selectUsers) => {
  const [assignees, setAssignees] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormValues | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik<FormValues>({
    initialValues: {
      statuteAct: "",
      formNo: "",
      particulars: "",
      date: null,
      department: "",
    },
    validationSchema,
    onSubmit: (
      values: FormValues,
      { resetForm }: FormikHelpers<FormValues>
    ) => {
      setFormData(values);
      handleOpen();
      resetForm();
    },
  });

  const handleConfirm = () => {
    console.log("Form data", formData);
    setSnackbarOpen(true);
    handleClose();
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleSnackbarClose = (
    event: React.SyntheticEvent<any> | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  // Filter users based on selected department
  const filteredUsers = users.filter(
    (user: User) => user.department === formik.values.department
  );

  return (
    <Box>
      <Box sx={{ margin: "4em", display: "flex", flexDirection: "row" }}>
        <h3
          style={{
            marginLeft: "7em",
            display: "flex",
            alignItems: "center",
            color: "black",
          }}
        >
          Add Filings
        </h3>
        <h5 style={{ marginLeft: "33%" }}>
          <a
            href=""
            style={{ display: "flex", alignItems: "center", color: "black" }}
          >
            Download Template <GetAppRoundedIcon sx={{ fontSize: 17 }} />
          </a>
        </h5>
        <h5 style={{ marginLeft: "3%" }}>
          <a
            href=""
            style={{ display: "flex", alignItems: "center", color: "black" }}
          >
            Upload Excel Doc <PublishRoundedIcon sx={{ fontSize: 17 }} />
          </a>
        </h5>
      </Box>

      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "3%" }}>
          <TextField
            sx={{ margin: 2, width: "30%" }}
            id="statuteAct"
            name="statuteAct"
            label="Enter the Statute/Act"
            variant="outlined"
            value={formik.values.statuteAct}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.statuteAct && Boolean(formik.errors.statuteAct)
            }
            helperText={formik.touched.statuteAct && formik.errors.statuteAct}
          />

          <TextField
            sx={{ margin: 2, width: "30%" }}
            id="formNo"
            name="formNo"
            label="Enter the Form/Challan No."
            variant="outlined"
            value={formik.values.formNo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.formNo && Boolean(formik.errors.formNo)}
            helperText={formik.touched.formNo && formik.errors.formNo}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "3%" }}>
          <TextField
            sx={{ margin: 2, width: "30%" }}
            id="particulars"
            name="particulars"
            label="Enter the particulars"
            variant="outlined"
            value={formik.values.particulars}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.particulars && Boolean(formik.errors.particulars)
            }
            helperText={formik.touched.particulars && formik.errors.particulars}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Select the Date"
              value={formik.values.date}
              minDate={minDate}
              maxDate={maxDate}
              sx={{ margin: 2, width: "30%" }}
              onChange={(newValue) => formik.setFieldValue("date", newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  error={formik.touched.date && Boolean(formik.errors.date)}
                  helperText={formik.touched.date && formik.errors.date}
                />
              )}
            />
          </LocalizationProvider>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "3%" }}>
          <FormControl
            sx={{ margin: 2, width: "30%" }}
            error={
              formik.touched.department && Boolean(formik.errors.department)
            }
          >
            <InputLabel id="department-select-label">Department</InputLabel>
            <Select
              labelId="department-select-label"
              id="department-select"
              name="department"
              value={formik.values.department}
              label="Department"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <MenuItem value="HR">HR</MenuItem>
              <MenuItem value="F&A">F&A</MenuItem>
              <MenuItem value="CS">CS</MenuItem>
            </Select>
            {formik.touched.department && formik.errors.department && (
              <FormHelperText>{formik.errors.department}</FormHelperText>
            )}
          </FormControl>

          <Autocomplete
            sx={{ margin: 2, width: "30%" }}
            multiple
            options={filteredUsers.map((user: User) => user.name)}
            value={assignees}
            onChange={(event, newValue) => {
              setAssignees(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Assignees" />
            )}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  // key={option}
                  label={option}
                  avatar={<Avatar>{option.charAt(0)}</Avatar>}
                  {...getTagProps({ index })}
                />
              ))
            }
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: "3%" }}>
          <Button
            sx={{
              bgcolor: "green",
              color: "success",
              margin: 2,
              width: "12em",
            }}
            variant="contained"
            type="submit"
          >
            Save
          </Button>
        </Box>
      </form>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to continue?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button id="confirm" sx={{ mt: 2 }} onClick={handleConfirm}>
              Yes
            </Button>
            <Button id="confirm" sx={{ mt: 2 }} onClick={handleClose}>
              No
            </Button>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
        message="User added successfully"
      />
    </Box>
  );
};

export default AddFilings;
