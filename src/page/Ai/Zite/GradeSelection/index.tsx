import React from "react";
import "../styles/components.scss";
import {useNavigate} from "react-router";

const GradeSelection: React.FC = () => {
	const navigate = useNavigate();

	function handleButtonClick(event: any) {
		navigate("/ai/zite/poemRecommendations", {state: {a: 1}});
	}
	return (
		<div className="page-container">
			<div className="text-center mb-8">
				<h1 className="page-title">AI古诗字帖生成</h1>
				<p className="page-subtitle">选择年级获取适合的古诗推荐</p>
			</div>

			<div className="grade-grid">
				<div className="grade-section">
					<h3 className="section-title">小学阶段</h3>
					<div className="primary-grid">
						{[
							{grade: "1-2", label: "年级"},
							{grade: "3-4", label: "年级"},
							{grade: "5-6", label: "年级"}
						].map(item => (
							<button key={item.grade} className="grade-button" onClick={handleButtonClick}>
								<span className="grade-number">{item.grade}</span>
								<span className="grade-label">{item.label}</span>
							</button>
						))}
					</div>
				</div>

				<div className="grade-section">
					<h3 className="section-title">初中阶段</h3>
					<div className="middle-grid">
						{[
							{grade: "7", label: "年级"},
							{grade: "8", label: "年级"},
							{grade: "9", label: "年级"}
						].map(item => (
							<button key={item.grade} className="grade-button">
								<span className="grade-number">{item.grade}</span>
								<span className="grade-label">{item.label}</span>
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="history-section">
				<h3 className="section-title">最近打印</h3>
				<div className="history-card">
					<div className="history-header">
						<span className="poem-title">静夜思</span>
						<span className="grade-info">小学三年级</span>
					</div>
					<div className="history-footer">
						<span className="author-name">李白</span>
						<button className="reprint-button">重新打印</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GradeSelection;
