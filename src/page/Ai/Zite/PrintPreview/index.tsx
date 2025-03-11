import React from "react";
import "../styles/components.scss";

const PrintPreview: React.FC = () => {
	return (
		<div className="page-container">
			<div className="preview-header">
				<div className="header-left">
					<button className="back-button">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<h2 className="page-title">打印预览</h2>
				</div>
			</div>

			<div className="preview-card">
				<div className="poem-header">
					<h3 className="poem-title">登鹳雀楼</h3>
					<p className="author-name">王之涣</p>
				</div>

				<div className="character-grid">
					{["白", "日", "依", "山", "尽"].map(char => (
						<div key={char} className="character-cell">
							{char}
						</div>
					))}
				</div>

				<div className="print-settings">
					<div className="setting-row">
						<span className="setting-label">字体大小</span>
						<div className="setting-options">
							{["小", "中", "大"].map(size => (
								<button key={size} className={`size-button ${size === "中" ? "active" : ""}`}>
									{size}
								</button>
							))}
						</div>
					</div>
					<div className="setting-row">
						<span className="setting-label">描红设置</span>
						<div className="setting-options">
							{["有", "无"].map(option => (
								<button key={option} className={`option-button ${option === "有" ? "active" : ""}`}>
									{option}
								</button>
							))}
						</div>
					</div>
				</div>
			</div>

			<button className="print-button">
				<svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
					/>
				</svg>
				开始打印
			</button>
		</div>
	);
};

export default PrintPreview;
