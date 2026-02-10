"use client";

import dynamic from "next/dynamic";
import "swagger-ui-react/swagger-ui.css";
import Link from "next/link";

const SwaggerUI = dynamic(() => import("swagger-ui-react"), { ssr: false });

export default function SwaggerPage() {
  return (
    <>
      {/* Title Bar */}
      <div className="border-b border-white/5 bg-vettr-dark/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/developers"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              &larr; Developer Portal
            </Link>
            <span className="text-white/20">|</span>
            <h1 className="text-lg font-semibold text-white">
              Interactive API Documentation
            </h1>
          </div>
          <Link
            href="/developers/docs"
            className="text-vettr-accent hover:text-vettr-accent/80 transition-colors text-sm font-medium"
          >
            View API Reference &rarr;
          </Link>
        </div>
      </div>

      {/* Swagger UI */}
      <div className="swagger-dark-theme min-h-screen">
        <SwaggerUI url="https://vettr-backend.vercel.app/v1/openapi.json" />
      </div>

      <style jsx global>{`
        .swagger-dark-theme .swagger-ui {
          background: var(--background);
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .topbar {
          display: none;
        }
        .swagger-dark-theme .swagger-ui .info {
          margin: 20px 0;
        }
        .swagger-dark-theme .swagger-ui .info .title {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .info .description p,
        .swagger-dark-theme .swagger-ui .info li,
        .swagger-dark-theme .swagger-ui .info p,
        .swagger-dark-theme .swagger-ui .info table {
          color: rgba(255, 255, 255, 0.7);
        }
        .swagger-dark-theme .swagger-ui .info a {
          color: #00E676;
        }
        .swagger-dark-theme .swagger-ui .scheme-container {
          background: #1E3348;
          box-shadow: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 16px;
          margin: 0 0 20px;
        }
        .swagger-dark-theme .swagger-ui .scheme-container label,
        .swagger-dark-theme .swagger-ui .scheme-container .schemes > label {
          color: rgba(255, 255, 255, 0.7);
        }
        .swagger-dark-theme .swagger-ui .opblock-tag {
          color: #fff;
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }
        .swagger-dark-theme .swagger-ui .opblock-tag:hover {
          background: rgba(255, 255, 255, 0.05);
        }
        .swagger-dark-theme .swagger-ui .opblock-tag small {
          color: rgba(255, 255, 255, 0.5);
        }
        .swagger-dark-theme .swagger-ui .opblock {
          background: #1E3348;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: none;
          border-radius: 12px;
          margin-bottom: 8px;
        }
        .swagger-dark-theme .swagger-ui .opblock .opblock-summary {
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }
        .swagger-dark-theme .swagger-ui .opblock .opblock-summary-method {
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          min-width: 70px;
          text-align: center;
        }
        .swagger-dark-theme .swagger-ui .opblock .opblock-summary-path,
        .swagger-dark-theme .swagger-ui .opblock .opblock-summary-description {
          color: rgba(255, 255, 255, 0.8);
        }
        .swagger-dark-theme .swagger-ui .opblock .opblock-section-header {
          background: rgba(255, 255, 255, 0.05);
          box-shadow: none;
        }
        .swagger-dark-theme .swagger-ui .opblock .opblock-section-header h4 {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .opblock-body pre {
          background: #0D1B2A;
          color: #00E676;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
        .swagger-dark-theme .swagger-ui .opblock-body pre span {
          color: #00E676 !important;
        }
        .swagger-dark-theme .swagger-ui .opblock.opblock-get {
          background: rgba(97, 175, 254, 0.05);
          border-color: rgba(97, 175, 254, 0.3);
        }
        .swagger-dark-theme .swagger-ui .opblock.opblock-post {
          background: rgba(73, 204, 144, 0.05);
          border-color: rgba(73, 204, 144, 0.3);
        }
        .swagger-dark-theme .swagger-ui .opblock.opblock-put {
          background: rgba(252, 161, 48, 0.05);
          border-color: rgba(252, 161, 48, 0.3);
        }
        .swagger-dark-theme .swagger-ui .opblock.opblock-delete {
          background: rgba(249, 62, 62, 0.05);
          border-color: rgba(249, 62, 62, 0.3);
        }
        .swagger-dark-theme .swagger-ui .model-box,
        .swagger-dark-theme .swagger-ui section.models {
          background: #1E3348;
          border-color: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
        .swagger-dark-theme .swagger-ui section.models h4 {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .model {
          color: rgba(255, 255, 255, 0.8);
        }
        .swagger-dark-theme .swagger-ui .model-title {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui table thead tr th,
        .swagger-dark-theme .swagger-ui table thead tr td {
          color: rgba(255, 255, 255, 0.8);
          border-bottom-color: rgba(255, 255, 255, 0.1);
        }
        .swagger-dark-theme .swagger-ui table tbody tr td {
          color: rgba(255, 255, 255, 0.7);
        }
        .swagger-dark-theme .swagger-ui .parameter__name {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .parameter__type {
          color: rgba(255, 255, 255, 0.6);
        }
        .swagger-dark-theme .swagger-ui .parameter__name.required::after {
          color: #FF5252;
        }
        .swagger-dark-theme .swagger-ui input[type="text"],
        .swagger-dark-theme .swagger-ui textarea {
          background: #0D1B2A;
          color: #fff;
          border-color: rgba(255, 255, 255, 0.2);
          border-radius: 6px;
        }
        .swagger-dark-theme .swagger-ui select {
          background: #0D1B2A;
          color: #fff;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .swagger-dark-theme .swagger-ui .btn {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.3);
        }
        .swagger-dark-theme .swagger-ui .btn.execute {
          background: #00E676;
          color: #0D1B2A;
          border-color: #00E676;
          font-weight: 700;
          border-radius: 8px;
        }
        .swagger-dark-theme .swagger-ui .btn.execute:hover {
          background: #00c964;
        }
        .swagger-dark-theme .swagger-ui .btn.cancel {
          color: #FF5252;
          border-color: #FF5252;
        }
        .swagger-dark-theme .swagger-ui .responses-inner h4,
        .swagger-dark-theme .swagger-ui .responses-inner h5 {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .response-col_status {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .response-col_description__inner p {
          color: rgba(255, 255, 255, 0.7);
        }
        .swagger-dark-theme .swagger-ui .markdown p,
        .swagger-dark-theme .swagger-ui .markdown li {
          color: rgba(255, 255, 255, 0.7);
        }
        .swagger-dark-theme .swagger-ui .prop-type {
          color: #00E676;
        }
        .swagger-dark-theme .swagger-ui .loading-container .loading::after {
          color: #00E676;
        }
        .swagger-dark-theme .swagger-ui .wrapper {
          max-width: 1200px;
          padding: 0 24px;
        }
        .swagger-dark-theme .swagger-ui .auth-wrapper .authorize {
          border-color: #00E676;
          color: #00E676;
        }
        .swagger-dark-theme .swagger-ui .auth-wrapper .authorize svg {
          fill: #00E676;
        }
        .swagger-dark-theme .swagger-ui .dialog-ux .modal-ux {
          background: #1E3348;
          border-color: rgba(255, 255, 255, 0.1);
        }
        .swagger-dark-theme .swagger-ui .dialog-ux .modal-ux-header h3 {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .dialog-ux .modal-ux-content p {
          color: rgba(255, 255, 255, 0.7);
        }
        .swagger-dark-theme .swagger-ui .dialog-ux .modal-ux-header .close-modal {
          fill: #fff;
        }
        .swagger-dark-theme .swagger-ui .copy-to-clipboard {
          right: 10px;
          top: 10px;
        }
        .swagger-dark-theme .swagger-ui .copy-to-clipboard button {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .swagger-dark-theme .swagger-ui .microlight {
          background: #0D1B2A !important;
          color: #00E676 !important;
        }
        .swagger-dark-theme .swagger-ui .highlight-code > .microlight code {
          color: #00E676 !important;
        }
        .swagger-dark-theme .swagger-ui .opblock-description-wrapper p {
          color: rgba(255, 255, 255, 0.7);
        }
        .swagger-dark-theme .swagger-ui .opblock .opblock-summary-path__deprecated {
          color: rgba(255, 255, 255, 0.3);
        }
        .swagger-dark-theme .swagger-ui .tab li {
          color: rgba(255, 255, 255, 0.6);
        }
        .swagger-dark-theme .swagger-ui .tab li.active {
          color: #fff;
        }
        .swagger-dark-theme .swagger-ui .tab li button.tablinks {
          color: rgba(255, 255, 255, 0.7);
        }
        .swagger-dark-theme .swagger-ui .tab li button.tablinks.active {
          color: #fff;
        }
      `}</style>
    </>
  );
}
