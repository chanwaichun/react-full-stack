import React, {useEffect} from "react";
import "../styles/components.scss";
import {useLocation, useNavigate} from "react-router";

const PoemRecommendations: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		console.log(location.state);
	});
	return (
		<div className="page-container">
			<div className="recommendations-header">
				<div className="header-left">
					<button
						className="back-button"
						onClick={() => {
							navigate(-1);
						}}
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<h2 className="page-title">三年级推荐</h2>
				</div>
				<span className="difficulty-label">难度适中</span>
			</div>

			<div className="recommendations-list">
				<div
					className="featured-recommendation"
					onClick={() => {
						navigate("/ai/zite/printPreview", {});
					}}
				>
					<div className="recommendation-header">
						<span className="ai-tag">AI推荐</span>
						<div className="difficulty-indicator">
							<span className="difficulty-text">难度</span>
							<div className="difficulty-dots">
								<div className="dot active"></div>
								<div className="dot active"></div>
								<div className="dot"></div>
							</div>
						</div>
					</div>
					<h3 className="poem-title">登鹳雀楼</h3>
					<p className="poem-preview">白日依山尽，黄河入海流...</p>
					<div className="recommendation-footer">
						<p className="author-name">王之涣</p>
						<button className="print-button">打印</button>
					</div>
				</div>

				<div className="regular-recommendation">
					<div className="recommendation-header">
						<h3 className="poem-title">咏柳</h3>
						<div className="difficulty-dots">
							<div className="dot active"></div>
							<div className="dot"></div>
							<div className="dot"></div>
						</div>
					</div>
					<p className="poem-preview">碧玉妆成一树高，万条垂下绿丝绦...</p>
					<div className="recommendation-footer">
						<p className="author-name">贺知章</p>
						<button className="print-button">打印</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PoemRecommendations;
