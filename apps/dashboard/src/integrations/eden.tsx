import { edenAdapter } from "@packages/eden";
export const getContext = () => {
	return {
		eden: edenAdapter,
	};
};
