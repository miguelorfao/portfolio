import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
function ExpenseTracker() {
  const [balance, setBalance] = useState([]);
  const [mainIncome, setMainIncome] = useState({
    main_income: 0,
    second_income: 0,
  });
  const [expenses, setExpense] = useState({
    rent_mortgage: 0,
    gas_electricity: 0,
    water: 0,
    tax: 0,
    insurance: 0,
  });
  let main_Income = Number(mainIncome.main_income);
  let second_Income = Number(mainIncome.second_income);
  let total_Income = main_Income + second_Income;
  let total = total_Income;

  let rent_mortgageBill = Number(expenses.rent_mortgage);
  let gas_electricityBill = Number(expenses.gas_electricity);
  let waterBill = Number(expenses.water);
  let taxBill = Number(expenses.tax);
  let insuranceBill = Number(expenses.insurance);
  let totalExpense =
    rent_mortgageBill +
    gas_electricityBill +
    waterBill +
    insuranceBill +
    taxBill;
  let expenseTotal = Number(totalExpense);
  let totalBalance = total - expenseTotal;

  const onchangeIncomeHandler = (event) => {
    setMainIncome((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // expense

  const onchangeExpenseHandler = (event) => {
    setExpense((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(totalExpense);
  return (
    <Header>
      <div className="container">
        <div className="row justify-content-center  g-2 mt-5">
          <div className="col shadow d-flex align-items-center justify-content-center">
            <div>
              <div>
                <h1>Your Budget</h1>
                <p>May 2021</p>
              </div>
              <div className="w-100 border border-info rounded-3 p-2">
                <h4 className="border-bottom">Balance</h4>
                <h3 className="m-auto">{totalBalance}</h3>
              </div>
              <div className="d-flex mt-5 justify-content-start gap-5">
                <div className="border border-info p-2 rounded-2 w-100">
                  <h4 className="border-bottom">Total Income</h4>
                  <p>£ {total}</p>
                </div>
                <div className="border border-info p-2 rounded-2 w-100">
                  <h4 className="border-bottom">Total Expenses</h4>
                  <p>{expenseTotal}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <ul className="nav nav-tabs gap-2" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="active btn btn-info"
                  data-bs-toggle="tab"
                  data-bs-target="#expenses"
                  type="button"
                  role="tab"
                  aria-controls="expenses"
                  aria-selected="true"
                >
                  Expenses
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="btn btn-info w-100"
                  id="income-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#income"
                  type="button"
                  role="tab"
                  aria-controls="income"
                  aria-selected="false"
                >
                  Income
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane active"
                id="expenses"
                role="tabpanel"
                aria-labelledby="expenses-tab"
              >
                <form action="">
                  {" "}
                  <ul class="list-group list-group-flush mt-5">
                    <li class="list-group-item border-bottom border-info">
                      <div className="d-flex justify-content-between">
                        <p>Rent / Mortgage</p>
                        <input
                          type="number"
                          name="rent_mortgage"
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={onchangeExpenseHandler}
                        />
                      </div>
                    </li>
                    <li class="list-group-item border-bottom border-info">
                      <div className="d-flex justify-content-between">
                        <p>Gas & Electricity</p>

                        <input
                          type="number"
                          name="gas_electricity"
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={onchangeExpenseHandler}
                        />
                      </div>
                    </li>
                    <li class="list-group-item border-bottom border-info">
                      <div className="d-flex justify-content-between">
                        <p>Water Bill</p>

                        <input
                          type="number"
                          name="water"
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={onchangeExpenseHandler}
                        />
                      </div>
                    </li>
                    <li class="list-group-item border-bottom border-info">
                      <div className="d-flex justify-content-between">
                        <p>Council Tax</p>

                        <input
                          type="number"
                          name="tax"
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={onchangeExpenseHandler}
                        />
                      </div>
                    </li>
                    <li class="list-group-item border-bottom border-info">
                      <div className="d-flex justify-content-between">
                        <p>Insurance</p>

                        <input
                          type="number"
                          name="insurance"
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={onchangeExpenseHandler}
                        />
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
              <div
                className="tab-pane"
                id="income"
                role="tabpanel"
                aria-labelledby="income-tab"
              >
                <form action="">
                  {" "}
                  <ul class="list-group list-group-flush mt-5">
                    <li class="list-group-item border-bottom border-info">
                      <div className="d-flex justify-content-between">
                        <p>Main Income</p>

                        <input
                          type="number"
                          name="main_income"
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={onchangeIncomeHandler}
                        />
                      </div>
                    </li>
                    <li class="list-group-item border-bottom border-info">
                      <div className="d-flex justify-content-between">
                        <p>Second Income</p>

                        <input
                          type="number"
                          name="second_income"
                          aria-describedby="helpId"
                          placeholder=""
                          onChange={onchangeIncomeHandler}
                        />
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default ExpenseTracker;
