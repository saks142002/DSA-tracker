import './Landing.css'
import React from 'react';

export default function() {

    const styles = {
        height : "60vh",
        font : 'Inter',
    }

    const headingStyles = {
        padding : "5%",
        fontWeight : '900'
    }

    return (
        <div className="Landing text-center" style={styles}>

            <h1 style={headingStyles}> DSA PROGRESS TRACKER </h1>

            {/* <h1>{getCount()} / 180 </h1> */}

            {/* <div className="TopicList">
                <div className="container item">
                    <div className="row">
                        <div className="col">
                            Arrays 
                        </div>
                        <div className="col">
                            Linked List
                        </div>
                        <div className="col">
                            Linked List and Arrays
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Greedy Algorithm
                        </div>
                        <div className="col">
                            Recursion
                        </div>
                        <div className="col">
                            Recursion and Backtracking
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Binary Search
                        </div>
                        <div className="col">
                            Trie
                        </div>
                        <div className="col">
                            Stacks and Queues
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            String
                        </div>
                        <div className="col">
                            Binary Tree
                        </div>
                        <div className="col">
                            Binary Tree
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            Graphs
                        </div>
                        <div className="col">
                            Dynamic Programming
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )

}