"use client"

import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button";
import React from "react";

const categories = [
    {id: "0", uid: "Letter"},
    {id: "1", uid: "Name"},
    {id: "2", uid: "City"},
    {id: "3", uid: "Country"},
    {id: "4", uid: "Plant"},
    {id: "5", uid: "Animal"},
]

export function GameTable() {
    //const [visibleColumns, setVisibleColumns] = React.useState(
    //    new Set(
    //        categories.filter(
    //            (e: { uid: string }) => e.uid
    //        ).map((object: { uid: string }) => object.uid)
    //    )
    //);

    function onSubmit(e) {

    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {categories.map((category) => (
                        <TableHead className="w-[100px] text-center" key={category.id}>{category.uid}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    {categories.map((category) => (
                        <TableCell className="font-medium" key={category.id}>
                            <Input id={category.id} type="text" placeholder=""/>
                        </TableCell>
                    ))}
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={categories.length - 1}></TableCell>
                    <TableCell className="text-right">
                        <Button>
                            Submit
                        </Button>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
