import { slide as Menu } from 'react-burger-menu';
import '../Sidebar.css'

export default function Sidebar(props) {

    return (
        <Menu>
            <a className="menu-item" href="#home">Home</a>
            <a className="menu-item" href="#Arrays">Arrays</a>
            <a className="menu-item" href="#LinkedList">Linked List</a>
            <a className="menu-item" href="#LinkedListAndArrays">Linked List and Arrays</a>
            <a className="menu-item" href="#GreedyAlgorithm">Greedy Algorithm</a>
            <a className="menu-item" href="#Recursion">Recursion</a>
            <a className="menu-item" href="#RecursionAndBacktracking">Recursion And Backtracking</a>
            <a className="menu-item" href="#StackAndQueue">Stack And Queue</a>
            <a className="menu-item" href="#Trie">Trie</a>
            <a className="menu-item" href="#String">String</a>
            <a className="menu-item" href="#BinaryTree">Binary Tree</a>
            <a className="menu-item" href="#BinarySearchTree">Binary Search Tree</a>
            <a className="menu-item" href="#Graphs">Graphs</a>
            <a className="menu-item" href="#DynamicProgramming">Dynamic Programming</a>

        </Menu>
    )

}