import React, { useMemo, useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import style from "./Leaderboard.css";
import "./Leaderboard_test.css";
import BTable from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Footer from "../../components/footer";
import { usePagination, useTable } from "react-table";
import { FaTrophy, FaMedal } from 'react-icons/fa';
import { BsFillHexagonFill } from 'react-icons/bs';
import { Dropdown } from "react-bootstrap";
import Loading from "../../components/leaderboard/Loading";

const Leaderboard_test = () => {

    const [fi, setFi] = useState([]);
    const [se, setSe] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getCSV() {
            try {
                const tempfi = [];
                const target = `https://docs.google.com/spreadsheets/d/e/2PACX-1vQbBtmoTx9NEqcob94XXoIMnorCXObHA7wb84DOhJ5-Qaoxq38Az5Gh8Uk_FHuB5J-uUgLb8RNBpwUO/pub?gid=0&single=true&output=csv`;
                const result = await fetch(target);
                const data = await result.text();
                var rows = data.toString().split("\r");
                for (let i = 0; i < rows.length; i++) {
                    let score = {};
                    let str = rows[i];
                    let s = "";
                    let flag = 0;
                    let arr = [];
                    for (let j = 0; j < str.length; j++) {
                        let ch = str[j];
                        if (ch === ',') {
                            arr.push(s);
                            s = "";
                            continue;
                        }
                        s += ch;
                    }

                    arr.push(s);
                    score["col1"] = i + 1;

                    score["col2"] = arr[0];
                    score["col3"] = arr[1];
                    tempfi.push(score);
                }

                setFi(tempfi);
                setSe(tempfi);
                setLoading(false);
            } catch (error) {

                console.log(error);

            }
        }

        getCSV();

    }, []);

    const columns = useMemo(
        () => [
            {
                Header: "Position",
                accessor: "col1",
            },
            {
                Header: "GitHub Handle",
                accessor: "col2",
            },
            {
                Header: "Score",
                accessor: "col3",
            },
        ],
        []
    );

    let data = useMemo(() => fi, [fi]);
    let data_dup = useMemo(() => se, [se]);

    const SearchHandler = (e) => {
        let query = e.target.value.toLowerCase();
        let temp = [];
        data_dup.forEach((user) => {
            if (user.col2.toLowerCase().includes(query))
                temp.push(user);
        })
        setFi(temp);
    }

    // const dta = useMemo(
    //   () => [
    //     {
    //       col1: "1",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "2",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "3",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "4",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "5",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "6",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "7",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "8",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "9",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "10",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //     {
    //       col1: "11",
    //       col2: {
    //         handle: "akr-25",
    //         dp: "https://avatars.githubusercontent.com/u/79211216?v=4",
    //       },
    //       col3: "312",
    //     },
    //   ],
    //   []
    // );



    const tableInstance = useTable(
        { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
        usePagination
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        nextPage,
        previousPage,
        setPageSize,
        gotoPage,
        state: { pageIndex, pageSize },
    } = tableInstance;

    const trophyEffect = () => {
        const eleTableBodyTr = document.querySelectorAll('.table-body-tr');
        const eleRank = document.querySelectorAll('.rank-col');
        const eleHex = document.querySelectorAll('.hexagon');
        eleRank.forEach(rank => {
            console.log(rank.innerHTML);
        })
        if (eleRank.length) {
            eleTableBodyTr[0].classList.remove('background-different');
            eleHex.forEach(hex => {
                hex.classList.remove('hexagon-1');
                hex.classList.remove('hexagon-2');
                hex.classList.remove('hexagon-3');
            })
            eleRank.forEach((rank, index) => {
                if (rank.innerHTML === '1') {
                    eleHex[index].classList.add('hexagon-1');
                    eleTableBodyTr[0].classList.add('background-different');
                }
                if (rank.innerHTML === '2') {
                    eleHex[index].classList.add('hexagon-2');
                }
                if (rank.innerHTML === '3') {
                    eleHex[index].classList.add('hexagon-3');
                }
            })
        }
    }
    useEffect(() => {
        trophyEffect();
    }, [pageIndex, loading, fi])

    return (
        <>
            <Navigation />
            <div class='leader-stars'></div>
            <div class='leader-twinkling'></div>
            <div style={style} >
                <div className='space'></div>
                <div className='title mb-5 p-3'>LEADERBOARD</div>
                {loading ? <Loading /> : (

                    <Container>
                        <input
                            type="search"
                            name="searchBar"
                            id="searchBar"
                            placeholder="Search for Participants"
                            onChange={(e) => SearchHandler(e)}
                        />

                        <div className='tablee'>
                            {/* <BTable responsive borderless striped hover>
              <thead>
                <tr className='mt-5'>
                  <th>Position</th>
                  <th>GitHub Handle</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, index) => (
                  <TableRow
                    key={index}
                    position={index + 1}
                    handle={"akr-25"}
                    dp={"https://avatars.githubusercontent.com/u/79211216?v=4"}
                  />
                ))}
              </tbody>
            </BTable> */}
                            <div className="border-top"></div>
                            <BTable responsive borderless striped hover {...getTableProps()}>
                                <thead className="table-head">
                                    {headerGroups.map((headerGroup) => (
                                        <tr {...headerGroup.getHeaderGroupProps()} className="table-head-tr">
                                            {headerGroup.headers.map((column) => (
                                                <th {...column.getHeaderProps()}>
                                                    {column.render("Header")}
                                                </th>
                                            ))}
                                        </tr>
                                    ))}
                                </thead>
                                <tbody {...getTableBodyProps()} className="table-body">
                                    {page.map((row, i) => {
                                        prepareRow(row);
                                        return (
                                            <tr {...row.getRowProps()} className="table-body-tr">
                                                {row.cells.map((cell) => {
                                                    if (cell["column"]["id"] === "col1")
                                                        return (
                                                            <td {...cell.getCellProps()} className="rank-col" >
                                                                {cell["value"]}
                                                            </td>
                                                        );
                                                    else if (cell["column"]["id"] === "col3")
                                                        return (
                                                            <td {...cell.getCellProps()}>
                                                                <div className="score-col">
                                                                    {cell["value"]}
                                                                </div>
                                                                <div className="prize-col" >
                                                                    <div className="hexagon"><BsFillHexagonFill /></div>
                                                                    <div className="medal">
                                                                        {<FaTrophy />}
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        );
                                                    else
                                                        return (
                                                            <td {...cell.getCellProps()}>
                                                                <a title="Github profile" class="g-handle" target="_blank" href={"https://github.com/" + cell["value"]}>{cell["value"]}</a>
                                                            </td>
                                                        );
                                                })}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </BTable>
                            <div className='pagination'>
                                <div className='pagination-left'>
                                    <span id='pageof'>
                                        Page{" "}
                                        <strong>
                                            {pageIndex + 1} of {pageOptions.length}
                                        </strong>{" "}
                                    </span>
                                    <div className='btn-grp'>
                                        <button
                                            onClick={() => gotoPage(0)}
                                            disabled={!canPreviousPage}
                                        >
                                            {"First"}
                                        </button>{" "}
                                        <button
                                            onClick={() => previousPage()}
                                            disabled={!canPreviousPage}
                                        >
                                            {"Previous"}
                                        </button>{" "}
                                        <button onClick={() => nextPage()} disabled={!canNextPage}>
                                            {"Next"}
                                        </button>{" "}
                                        <button
                                            onClick={() => gotoPage(pageCount - 1)}
                                            disabled={!canNextPage}
                                        >
                                            {"Last"}
                                        </button>{" "}
                                    </div>
                                </div>
                                <div className='pagination-right'>
                                    <div className='input-group'>
                                        <span className='input-group-text'>Go to Page: </span>
                                        <input
                                            type='text'
                                            aria-label='First name'
                                            className='form-control'
                                            defaultValue={pageIndex + 1}
                                            onChange={(e) => {
                                                const page = e.target.value
                                                    ? Number(e.target.value) - 1
                                                    : 0;
                                                gotoPage(page);
                                            }}
                                            style={{ width: "100px" }}
                                        />
                                    </div>

                                    <Dropdown>
                                        <Dropdown.Toggle
                                            // variant='info'
                                            style={{
                                                backgroundColor: "#cce7ff",
                                                marginLeft: "1em",
                                                color: "#2e63a5",
                                                borderColor: "#fff",
                                            }}
                                            id='dropdown-basic'
                                        >
                                            Items per page
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {[5, 10, 15, 20, 25].map((pageSize) => (
                                                <Dropdown.Item
                                                    key={pageSize}
                                                    value={pageSize}
                                                    onClick={(e) => {
                                                        setPageSize(pageSize);
                                                    }}
                                                >
                                                    Show {pageSize}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    {/* <div className='dropdown'>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                  >
                    {[5, 10, 15, 20, 25].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </div> */}
                                </div>
                            </div>
                        </div>
                    </Container>
                )}
                <div className='space'></div>
                <Footer bg='#12263F' />
            </div>
            {/* <ScrollButton /> */}
        </>
    );
};

export default Leaderboard_test;
