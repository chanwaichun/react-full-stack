import {useEffect, useMemo} from "react";
import fingerprint from "@fingerprintjs/fingerprintjs";

export default function VisitorAuth(props: any) {
	async function handleLoad() {
		const res = await fingerprint.load();
		const id = await res.get();
	}

	useEffect(() => {
		handleLoad();
	}, []);

	return useMemo(() => <> {props.children}</>, [props.children]);
}
