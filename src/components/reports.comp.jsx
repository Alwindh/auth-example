import {
	Paper,
	Typography,
	Grid,
	Tab,
	Table,
	TableContainer,
	TableCell,
	TableHead,
	TableRow,
	TableBody,
	Button,
	Stack,
	Box,
} from "@mui/material";
import ReportsData from "../mockdata/reports.json";
import ClientsData from "../mockdata/clients.json";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

function getClientName(clientId) {
	const client = ClientsData.find((client) => client.NativeId === clientId);
	return client.FirstName;
}

export function ReportsComponent({ setLoggedIn }) {
	return (
		<>
			<Paper sx={{ m: 2, p: 2 }}>
				<Typography variant="h4">Reports</Typography>
				<TableContainer>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								<TableCell style={{ width: "10px" }}>Report</TableCell>
								<TableCell>Subject</TableCell>
								<TableCell style={{ width: "100px" }}>Client</TableCell>
								<TableCell style={{ width: "100px" }}>By</TableCell>
								<TableCell style={{ width: "150px" }}>On</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{ReportsData.map((report) => (
								<TableRow key={report.id}>
									<TableCell style={{ width: "10px" }}>
										{report.HasPriority && <PriorityHighIcon />}
									</TableCell>
									<TableCell>{report.Subject}</TableCell>
									<TableCell>{getClientName(report.ClientId)}</TableCell>
									<TableCell>{report.CreatedBy}</TableCell>
									<TableCell>
										{new Date(report.CreatedAt).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
			<Paper sx={{ m: 2, p: 2 }}>
				<Stack
					style={{ display: "flex", justifyContent: "space-between" }}
					width={"100%"}
					direction={"row"}
					spacing={2}>
					<Button
						onClick={() => {
							setLoggedIn(false);
						}}
						variant="contained"
						color="warning">
						Log out
					</Button>

					<Button
						variant="contained"
						color="success">
						Add Report
					</Button>
				</Stack>
			</Paper>
		</>
	);
}
