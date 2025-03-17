import {useMemo} from "react";

export default function VisitorAuth(props: any) {
    return useMemo(() => <> {props.children}</>, [props.children]);
}
