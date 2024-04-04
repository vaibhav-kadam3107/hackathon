import React from "react";
import { H1 } from "../../styles/twStyles";
import Chart from "./Chart";
import ExpenseForm from "./ExpenseForm";
import Transactions from "./Transactions";
import Sidebar from "../Sidebar/Sidebar";
export default function Home() {
	return (
		<div className="app flex h-screen">
			<Sidebar />
			<div className="flex-1 flex place-content-center py-3 overflow-hidden">
				<div className="content shadow-lg bg-white rounded-2xl p-4">
					<div className="container mx-auto px-4">
						<div className="expense_form">
							<h1 className={H1}>Add Expense</h1>
							<ExpenseForm />
						</div>
						<hr className="mt-3" />

						<div className="expenses_content flex flex-wrap gap-x-10 mt-4">
							<Transactions />
							<Chart type="Doughnut" title="States" width="25vh" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
