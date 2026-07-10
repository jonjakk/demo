# Wiki Operation Log

Append-only. One entry per operation. Format: `## [YYYY-MM-DD HH:MM] <op> | <summary>`

## [2026-07-08] init | Wiki scaffolded

- Scope: Full global VW Group (VW AG root `001ed000012nyshAAA`, all subsidiaries, brands, and financial services entities).
- Purpose: Comprehensive — opportunity discovery + deal support + long-term intelligence.
- Confidentiality: Strictly local (git init, no remote).
- Verifier depth: Strict (4 verifiers, up to 3 revise rounds).
- Time window: All-time (no cutoff).
- Sources: Slack + Google Drive + Org62. Gmail explicitly out of scope.

Directory tree created. Writer + 4 verifier + 3 collector subagent prompts drafted.

## [2026-07-08] blocker | Google Drive auth failing

- `mcp__google-workspace__search_drive_files` returns `unsupported protocol scheme ""` — token refresh broken.
- Slack and Org62 acquisition can proceed independently.
- Filed to `.cache/blockers.md`.

## [2026-07-09] merge | wiki/initiatives/agentforce-momentum-120.md

- Page type: initiative
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS_WITH_FLAGS (NCR→CCR acronym unexpanded in raw)
- Sources consulted: 5 (all files in m120-volkswagen-agentforce-fde/)
- Review round: 1
- Orphan wikilinks introduced: entities/executives/simeon-dimitrov, entities/executives/lucy-trott, entities/executives/jana-jakel, entities/vendors/capgemini, entities/vendors/regrello, entities/vendors/aws, initiatives/vw-uk-d360

## [2026-07-09] merge | wiki/initiatives/vw-uk-d360.md

- Page type: initiative
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 3 (data-cloud-adoption-scaling index + 2026-06-11 thread + sic-UKI channel)
- Review round: 1
- Key data: €12M AOV, £150k UK PoC waste (Dalton), [[entities/executives/lucy-trott|Lucy Trott]] 3 options framing, 2026-07-03 UK BoM review upcoming
- Orphan wikilinks introduced: initiatives/one-crm (upcoming), initiatives/agentforce-momentum-120 (already merged)

## [2026-07-09] merge | wiki/initiatives/one-crm.md

- Page type: initiative
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no Drive), completeness PASS_WITH_FLAGS (scope unverified)
- Sources consulted: 12 (Org62 records/hierarchy/contacts/activities + 4 Slack channels)
- Review round: 1
- Key finding: Škoda + CARIAD + VW Ireland confirmed running on One.CRM; blocker on OEM Business Platform per [[entities/executives/jan-besten|Jan Besten]] 2025-09-12; Yiyi Tang (CARIAD) + Andreas Seitz (Audi) named architects
- Orphan wikilinks introduced: entities/accounts/skoda-auto-cz (Škoda AUTO a.s. Org62), entities/accounts/cariad-se (already exists)

## [2026-07-09] merge | wiki/initiatives/vwfs-transformation.md

- Page type: initiative
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS_WITH_FLAGS (canvas content not ingested)
- Sources consulted: 4 (all four VWFS channels in scope: steer-co-jan25, accelerator-motion, prof-services, transformation-status-quo-overview)
- Review round: 1
- Key finding: [[entities/executives/dana-birkholz|Dana Birkholz]] CTO onboarding, Jan 2025 SteerCo reset, 50% VWFS budget cuts flagged 2025-06-12, transformation-gap executive summary channel opened 2025-07-28 (content not ingested)

## [2026-07-09] merge | wiki/initiatives/grip-transform.md

- Page type: initiative
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (single-index channel)
- Review round: 1
- Key finding: MuleSoft Anypoint to production 2026-02-06 within VWG GrIP; TranS4/m migrates to CloudHub 2.0 (chose MuleSoft over SAP 80% discount); 20+ vCores reorder December 2026 near-certain; Agent Fabric PoC successful
- Orphan wikilinks introduced: entities/vendors/mulesoft, entities/vendors/sap, entities/vendors/deloitte, entities/vendors/mhp

## [2026-07-09] merge | wiki/entities/accounts/vw-group-of-america.md

- Page type: account (tier-2)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 7 (Org62 account/hierarchy + 2 Slack channels + contacts/activities)
- Review round: 1
- Key finding: MDM Global Headquarters shell, zero opps/activities on this record itself; all NAR pipeline sits on Audi of America child. Owner is system-managed API Internal. Parent = Ferdinand Porsche Familien-Privatstiftung.
- Orphan wikilinks introduced: entities/executives/michelle-rubio

## [2026-07-09] merge | wiki/entities/accounts/audi-of-america.md

- Page type: account (tier-2)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (only 5 of 455 opps ingested), completeness PASS
- Sources consulted: 13 (Org62 account/hierarchy + 5 opps + contacts + activities + 2 Slack channels)
- Review round: 1
- Key finding: NAR operational catch-all — 455 opps totaling $38.4M lifetime pipeline. VW-branded activity dominates despite "Audi of America" name. Active Agentforce workstreams: Contact Center order form, ITSM/Voice (Cynthia Johnson), Password Agent (Tony Kramer), MC Next sync. Historical AI Warranty Fraud RFP $2.14M lost 2026-04-30.
- Orphan wikilinks introduced: entities/executives/michelle-rubio (also referenced above)

## [2026-07-09] merge | wiki/entities/accounts/vw-do-brasil.md

- Page type: account (tier-2)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (5 of 157 opps; Whirlpool events wrongly nested), completeness PASS
- Sources consulted: 11 (Org62 account/hierarchy + 5 opps + contacts/activities + 1 Slack channel)
- Review round: 1
- Key finding: 157 opps totalling $4.7M, mostly Dead-No-Decision/Duplicate/Lost. 2025-01-31 renewal $208k Won. VWFS Brasil operates through this manufacturer record (no separate Org62 entity). Whirlpool war-room events erroneously logged against this account.
- Orphan wikilinks introduced: entities/executives/beatriz-mantovanini

## [2026-07-09] merge | wiki/entities/accounts/vw-leasing-de.md

- Page type: account (tier-2)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (5 of 14 opps; contacts not consulted), completeness PASS
- Sources consulted: 10 (Org62 account/hierarchy/VWFS-AG cross-ref + 5 opps + 1 Slack channel)
- Review round: 1
- Key finding: 14 opps totalling $279,514.39 — only 1 currently open ($120k Agentforce for Learning Adoption BDR). SAP-decommissioned-by-2030 thesis anchor. Braunschweig demo scenario built around Electra + VIN + kilometer verification. Shelf-reduction pattern on 2026 BDR opps.

## [2026-07-09] merge | wiki/entities/accounts/vw-group-italia.md

- Page type: account (tier-2)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (5 of 86 opps; Slack SELA cross-ref added in revision 1), completeness PASS
- Sources consulted: 11 (Org62 account/hierarchy + 5 opps + 2 Slack channel files + global-renewal cross-ref)
- Review round: 1
- Key finding: Parent = AUDI AG (not VW AG); customer lead Elena on maternity leave from mid-2026-Q2; mid-May 2026 close-by deadline for Data Mgmt (Informatica), Service Voice doubling, and Signature evaluation. Service Cloud Voice with Amazon Connect renewed annually outside global SELA (Derek Byrne precedent Dec 2024). Currently open: Renewal 144 CY2026 at $149.7k.
- Orphan wikilinks introduced: entities/executives/davide-vigano

## [2026-07-09] merge | wiki/entities/accounts/vw-group-ireland.md

- Page type: account (tier-2)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (5 of 63 opps; VWFS Ireland has no separate record — future page candidate; ideation-day-breakout-transcripts thread added in revision 1), completeness PASS
- Sources consulted: 13 (Org62 account/hierarchy + 5 opps + 3 Slack channels + 2 Slack threads)
- Review round: 1
- Key finding: All 5 ingested opps Dead (No Opportunity/Lost/Duplicate/Webstore/OEM). 2026-07-03 VW Group day uncovered WhatsApp/SMS/MI/Loyalty pipeline. 2026-06-26 Brian McDonagh appointed CDO. 2026-06-12 Colin O'Rourke MuleSoft+Informatica math: €12.9m-€51.6m 5-year at-risk. Miles/Sofico intelligence via Philipp Maag. 2026-06-29 Ideation Day 4 prioritized initiatives (Web-to-lead, SDR agent, Data360, Hubbl Scan + Process Intelligence).
- Orphan wikilinks introduced: (none — Eamon Fennell already referenced elsewhere)

## [2026-07-09] merge | wiki/entities/accounts/vw-group-australia.md

- Page type: account (tier-2)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (5 of 275 opps; 2026 renewal not surfaced; ME FZCO decision pending), completeness PASS
- Sources consulted: 10 (Org62 account/hierarchy + 5 opps + Slack global-renewal channel + 1 Slack thread)
- Review round: 1
- Key finding: 275 opps totalling $11.6M; annual "Full CRM + Platform + Analytics Cloud + Org Permission" renewal cadence ($577k→$702k→$1.4M→$1.54M). Feb 2025 SELA roll-in crisis resolved by 30-day extension + supersession. Post-Feb-2025 on Global SELA. Middle East FZCO parented under VW Australia record.
- Orphan wikilinks introduced: entities/executives/ingrid-prowse

## [2026-07-09] merge | wiki/entities/accounts/diconium.md

- Page type: account (tier-2)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (5 of 38 opps; coopetition suggests vendor-page counterpart; skoda-af-proj index added in revision 1), completeness PASS
- Sources consulted: 11 (Org62 account/hierarchy + 5 opps + 2 Slack channels + 1 thread)
- Review round: 1
- Key finding: Coopetition role — VW subsidiary AND long-term implementation partner. Tiny direct-selling pipeline ($90k across 38 opps) is a feature; commercial gravity on the accounts Diconium services (CARIAD, Škoda, VW). 2025-09-22 Meri Korhonen Skoda AF thesis "Skoda wants Diconium to build; we should position PS to advise". 2025-09-24 [[entities/executives/simeon-dimitrov|Simeon Dimitrov]] risk framing on partner takeover.

## [2026-07-09] refresh | wiki/entities/accounts/vwfs-ag.md

- Trigger: Drive Phase 2 landed 15 VWFS-relevant raw slide decks (FY27 CRM architecture, Strategic Frame v1, SIC feedback, Stefan Imme exec summary, AI use cases, DC/Infa/Mule consumption model, PoV artefacts, R&R docs, agentic enterprise WIP, Data 360 102, Spread partnership update)
- Coverage verdict before revision: FAIL
- Revised: yes
- New sources added: 13 (fy27-vwfs-crm-architecture-20260714, vwfs-strategic-frame-v1, vwfs-x-salesforce-sic-feedback-wip-20260602, vwfs-service-ger-exec-summary-stefan-imme-20250702, vwfs-ai-use-cases-customer-version-170625, vwfs-success-metrics-bv-interview-outcomes-20250523, vwfs-service-pov-final-status-20250630, vwfs-service-pov-get-to-know-20250519, fy27-vwfs-dc-infa-mule-consumption-use-cases, fy27-vwfs-data-360-102-unlock-trapped-data-connectivity, fy27-vwfs-data-cloud-product-insights-20260618, internal-vwfs-service-sf-team-rr, vwfs-ger-service-x-sf-team-rr-overview, wip-fy27-vwfs-agentic-enterprise-202606xx)
- Key new claims: FY27 target architecture formally defined (Automotive Cloud + Data 360 + Informatica MDM + MuleSoft Agent Fabric, Move a-e framework, R1-R4 risks including AI Act Art 26(7) Mitbestimmung); [[entities/executives/alena-kretzberg|Alena Kretzberg]] confirmed CIO VWFS Board Member with 4 named heads of function (Knappstein, Garz, Lange, Kreft=Head of Sales & CRM of IT); VWFS Markt DE SAP maintenance ends 2029 (not 2030); ~€80M Salesforce invest with little BV per Stefan Imme; ~21,713 Flex Credits/month consumption baseline; 6-agent Agentforce roster pitched (ID&V, Dealership Complaints, Knowledge, Vulnerable Customer, Analytics, Case Management); resolved 2029/2030 SAP contradiction; added Petra Feath full name; SPREAD.ai Series B $30M funded by Salesforce Ventures.
- Review round: 2

## [2026-07-09] refresh | wiki/initiatives/vwfs-transformation.md

- Trigger: Drive Phase 2 landed 13 VWFS-relevant raw slide decks (same batch as vwfs-ag.md, minus opp records)
- Coverage verdict before revision: FAIL
- Revised: yes
- New sources added: 13 (vwfs-strategic-frame-v1, vwfs-x-salesforce-sic-feedback-wip-20260602, vwfs-service-ger-exec-summary-stefan-imme-20250702, vwfs-success-metrics-bv-interview-outcomes-20250523, vwfs-service-pov-get-to-know-20250519, vwfs-service-pov-final-status-20250630, vwfs-ger-service-x-sf-team-rr-overview, internal-vwfs-service-sf-team-rr, fy27-vwfs-crm-architecture-20260714, wip-fy27-vwfs-agentic-enterprise-202606xx, fy27-vwfs-dc-infa-mule-consumption-use-cases, vwfs-ai-use-cases-customer-version-170625, fy27-vwfs-data-360-102-unlock-trapped-data-connectivity, fy27-vwfs-data-cloud-product-insights-20260618)
- Key new claims: The 2025-07-28 "transformation gap" channel produced Drive-based deliverables (Stefan Imme exec summary, Strategic Frame v1, SIC feedback, FY27 architecture) rather than a single executive summary; customer-side root causes ("€80M invest with little BV", "Digital Unit largely seen as failed") documented; SIC San Francisco visit 2026-05-21 (Kretzberg-led delegation) is the current anchoring event; post-SIC Next Steps timeline defined through September (Technology/Business Impact/Culture&People/Processes&Governance streams); Gerhard Mack Strategic Frame Move (a-e) + R1-R4 risks introduced; VWFS Markt DE SAP-vs-Salesforce parallel workstream (2,500 users, 2029 maintenance end, €2.5M License Opp 1); VWFS PoV closure June 2025 with 53 user stories.
- Review round: 2

## [2026-07-09] merge | wiki/entities/executives/hans-paulini.md

- Page type: executive
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (SELA-split channel passive joiner only), completeness PASS
- Sources consulted: 10 (vw-agentforce channel index + 5 threads + audi-agentforce-meta + m120 + 2 org62 activity ledgers)
- Review round: 1
- Key claims: creator of `#vw-agentforce` 2025-02-10 (master group Agentforce channel); dominant author across Universal Credits SKU shift, GOC pricing pushback, AI Day for VW Global 2025-07-23 proposal, VW Ireland Sales Workplace 2025-07-17 forward, Munich dinner with Jager-Hyman, 2026-01-20 UK CTO demo request from Lindsay Murdoch; Org62 events with Tom Murphy (VW Ireland) and Steve Reichert (Porsche KIA Connect).
- Orphan wikilinks introduced: entities/executives/anne-bogershausen

## [2026-07-09] merge | wiki/entities/executives/christopher-emmerich.md

- Page type: executive
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (contract summary files not consulted; likely duplicate of 7 owned SOWs), completeness PASS
- Sources consulted: 16 (3 VWFS+CARIAD channel indexes + audi-agentforce-meta + vw-agentforce + volkswagen-data-cloud-adoption-scaling + 2 Drive R&R slides + 7 Emmerich-owned SOW opps)
- Review round: 1
- Key claims: creator of `#vwfs-prof-services` (2025-05-12), `#vwfs-steer-co-jan25` (2025-01-22), `#cariad-rfp-genai-platform-for-ddd-dba` (2025-03-03); "Engagement Delivery and Setup" on VWFS GER Service R&R; owner on 7 VW-scope Type=SOW opps totalling $2,985,954.70 across VWFS ($2.18M won), Škoda (2 won + 1 dead), VW Ireland (dead), VW Group Polska (open $196.68k largest active); flagged as SFPS/CSM for Deloitte Spain RFP.
- Orphan wikilinks introduced: entities/executives/anne-bogershausen (already referenced elsewhere)

## [2026-07-09] merge | wiki/entities/executives/simeon-dimitrov.md

- Page type: executive
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS (VWFS UK + VGP org62 activities added inline after coverage sweep), completeness PASS
- Sources consulted: 9 (VWFS AI Use Cases Drive deck + M120 channel index + 3 threads + audi-agentforce-meta + skoda-af-proj partner-strategy thread + 2 org62 activity ledgers)
- Review round: 1
- Key claims: Drive document owner (sdimitrov@salesforce.com) on VWFS AI Use Cases CUSTOMER VERSION 170625 — Agentforce for Commission Case Handling (£9.7M annual net benefit, c.5× ROI, 3-month payback, 6-agent VWFS UK roster, Flex Credit + SAM Pricing sizing); dominant weekly-update author on `#m120-volkswagen-agentforce-fde`; anchor of 2025-09-24 "Diconium partner-takeover-risk" framing; VW AG Momentum Program Graduation approver 2026-05-06.
- Orphan wikilinks introduced: entities/executives/lucy-trott, entities/executives/jana-jakel, entities/executives/anne-bogershausen, entities/executives/christopher-emmerich (all already referenced elsewhere)

## [2026-07-09] merge | wiki/entities/executives/jan-besten.md

- Page type: executive
- Verifier verdicts: citation PASS, contradiction PASS_WITH_FLAGS (orchestrator prompt role prior vs raw evidence), coverage PASS, completeness PASS
- Sources consulted: 7 (volkswagen-data-cloud-adoption-scaling index + audi-agentforce-meta index+thread + m120 channel + 3 org62 activity ledgers)
- Review round: 1
- Key finding: Raw evidence contradicts the orchestrator-prompt assumption that Besten is customer-side / CARIAD. Besten is a listed participant on salesforce-internal.slack.com (Slack UID U08L3HY6GG0), nominated by [[entities/executives/christoph-jentsch|Christoph Jentsch]] (VW Group AE) as DC/D360 enablement lead, paired with Anne Bögershausen on licenses guidance, and speaks about VW subsidiaries in a Salesforce-account-planning voice on the 2025-09-12 PI update. Page tagged `role: salesforce-team`; divergence captured in in-page Contradictions section. Author of the OEM Business Platform "blocked by One.CRM architecture" claim cited by `initiatives/one-crm.md`.
- Orphan wikilinks introduced: entities/executives/anne-bogershausen

## [2026-07-09] refresh | wiki/entities/accounts/vwfs-uk.md

- Trigger: Drive Phase 2 (VWFS AI Use Cases customer version 170625 references "VWFS UK Integrated Agentic Stack" and 6-agent roster)
- Coverage verdict before revision: PASS_WITH_FLAGS
- Revised: light — added 1 source and 1 flag; existing claims not affected
- New sources added: 1 (vwfs-ai-use-cases-customer-version-170625)
- Key new claims: External customer deck pitches 6 Agentforce agents (ID&V, Dealership Complaints, Knowledge, Vulnerable Customer, Analytics, Case Management) as the "VWFS UK Integrated Agentic Stack"; only ID&V is confirmed in production per existing Slack raw; other 5 are pitched, deployment status not yet in raw.
- Review round: 2

## [2026-07-09] merge | wiki/entities/executives/alena-kretzberg.md

- Page type: executive (role-customer)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 5 (vwfs-x-salesforce-sic-feedback-wip-20260602 + vwfs-stakeholder-overview-communication + vwfs-service-ger-exec-summary-stefan-imme-20250702 + sic-amer-volkswagen-financial-5-21 index + vwfs-prof-services index)
- Review round: 1
- Key claims: CIO / VWFS Board Member; 2026-05-21 SIC delegation lead (SF Tower); attributed quote 2026-05-22 "Tell us how it could work — and we will support you"; post-SIC owner on 3 streams (Culture&People Change Workshop, 3-monthly Stakeholder Check-In, Dreamforce 2026); stakeholder sheet baseline "Not negative but not personally engaged with SF projects" (Claudia Garz 2025-06-12); [[entities/executives/silke-sommerfeld|Silke Sommerfeld]] as primary Salesforce relationship point.
- Orphan wikilinks introduced: (none — all named execs are already-existing pages or forthcoming standard VWFS exec candidates)

## [2026-07-09] merge | wiki/entities/executives/gerhard-mack.md

- Page type: executive (role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 9 (vwfs-strategic-frame-v1 + vwg-salesforce-spread-partnership-update-20260508 + blocker-vwg-as-2026-01-29-gemini-notes + vwg-additional-use-cases-2026-02-02-gemini-notes + 3 Slack channels [DC UK escalation index+thread, m120 ORMA thread, skoda AF observability thread] + vwfs-cdp-implementation)
- Review round: 1
- Key claims: Author of VWFS Strategic Frame v1 (Move a-e + R1-R4 risks); L4 Architecture lead for VW in VWG×SPREAD partnership governance (with veto on architecture); central-org boundary discipline (UK After Sales 5-way frame; "75mio footprint trust risk" on UK D360; Skoda "man in the middle" CoE framing); complexity-driver methodology + "Baukastensystem" MQB/MEB metaphor.
- Orphan wikilinks introduced: (none — all named execs already-existing pages or forthcoming)

## [2026-07-09] merge | wiki/entities/executives/lucy-trott.md

- Page type: executive (role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 22 (org62: 2 accounts + 2 opps + hierarchy + activities + cases; slack: 6 VWFS UK Service support files + vwfs-uk-agentforce-help + m120 index + m120 thread + DC UK index + DC UK thread + SIC UKI + global-renewal)
- Review round: 1
- Key claims: Account Executive on VWFS UK (255 opps, $12.69M lifetime) + Bentley Motors ($200k open Data Cloud BDR); creator of #ZC:C08LCQUPUDP:VWFS UK Service support (2025-03-31) + #vwfs-uk-agentforce-help (2025-08-04); DCAA scandal anchor (£5.4M FCA fine + £21.5M redress); 3-priority agentic-enterprise agenda (Agentforce for Service / MDM Informatica / Genesys SCV); VW UK D360 escalator (three-option framing, "never suggested VWUK shouldn't adopt global D360", £150k PoC waste, €12M AOV at risk); UK After Sales single-org debate voice contra Gerhard Mack.
- Orphan wikilinks introduced: (none — all named execs already-existing pages or forthcoming)

## [2026-07-09] merge | wiki/entities/executives/dana-birkholz.md

- Page type: executive (role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 13 (Slack: 4 VWFS channels + 3 Škoda files + vw-ums + Audi HQ AF for Commerce; Drive: 5 decks — Success Metrics BV interview outcomes, PoV Get-to-Know, SIC feedback WIP, GER Service R&R Overview external + internal)
- Review round: 1
- Key claims: Formal title "Senior Business Transformation Architect / VWFS CTO"; creator of #vwfs-accelerator-motion (2025-03-17) + #vwfs-transformation-status-quo-overview (2025-07-28, canvas tabs F0987JH10KB & F097TDSNBJ6); onboarding motion Way Forward 5 points including Canvas + CSG S2D handover; SWE budget consumption "4 of 6 months with Dana"; Škoda AF CoE governance voice (Agentforce Analytics discontinued vs Agent Analytics recommended; "Blocking go-lives at Skoda"); Škoda SteerCo takeaways 2025-10-28 (Jürgen challenges positive Business Case, Anna quoted).
- Orphan wikilinks introduced: (none — all named execs already-existing pages or forthcoming)

## [2026-07-09] merge | wiki/timelines/vwfs-architecture-evolution.md

- Page type: timeline (VWFS Specialty batch)
- Verifier verdicts: citation PASS_WITH_FLAGS (€80M normalization vs raw "80M Salesforce Invest"; consistent with existing merged pages), contradiction PASS, coverage PASS_WITH_FLAGS (2 R&R Drive docs peripheral to arc, not consulted), completeness PASS
- Sources consulted: 15 (13 Drive slide decks + 2 Slack — vwfs-cdp-implementation index + 2024-04-10 data-types blocker thread)
- Review round: 1
- Key claims: FY19 → FY27 arc consolidated in year-headed structure (2019 → 2026+). 2019 Target Picture 2030 CRM² declared; 2020 centralization bet; 2020–2024 €80M invest with little BV + Digital Unit "largely seen as failed"; 2023-08-07 #vwfs-cdp-implementation kickoff; 2024-01-31 SOW CDC $973K; 2024-04-10 Data Cloud release-cadence blocker + Tony Hegewald root cause + Ulf Schernikau resolution; 2025-05-19→2025-06-30 VWFS Service PoV (53 user stories); 2025-07-02 Stefan Imme exec summary (SAP maintenance ends 2029 Markt DE); 2026-05 Strategic Frame v1 (Move a-e + R1-R4); 2026-05-21 SIC SF; 2026-06-30 consumption baseline (~21.7K Flex/mo); 2026-07-10 SIC Munich; 2026-07-14 FY27 CRM Architecture readout. Move (e) real-time D360 access at scale = KEYSTONE OPEN. AI Act Art 26(7) Mitbestimmung named as R3.
- Orphan wikilinks introduced: capabilities/agentic-enterprise-vwfs (merged same batch)

## [2026-07-09] merge | wiki/capabilities/agentic-enterprise-vwfs.md

- Page type: capability (VWFS Specialty batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (Data 360 102 + Data Cloud Product Insights + 2 R&R decks peripheral, not consulted), completeness PASS
- Sources consulted: 8 (7 Drive decks + m120 channel index for M120 UK lighthouse timing)
- Review round: 1
- Key claims: Gerhard Mack's Five Technical Moves (a) Data 360 sole activator / (b) Marketing Cloud Next local / (c) Companion Org pattern / (d) MuleSoft role pivot to Agent Fabric / (e) Real-time D360 access KEYSTONE. R1 Real-time D360 at scale · R2 Companion Org at VWFS scale · R3 AI Act Art 26(7) Mitbestimmung · R4 MuleSoft re-skilling. VWFS confirmed applicable; VW AG, Audi, CARIAD, Škoda flagged CANDIDATE. Product mapping: Data Cloud (Data 360 + Data Cloud One Oct 2024) · Agentforce (Atlas + Trust Layer) · MuleSoft Agent Fabric (Broker/Registry/Visualizer/AI Gateway Oct 2025/Jan 2026 + MOMA/SOMA/A2A) · Sales/Marketing/Service Cloud + Automotive Cloud · Shield + Identity. Analyst-validated variant (McKinsey/BCG/Deloitte/Accenture/Gartner/PwC 5-capability model). SPREAD.ai partnership complements engineering ontology / product-twin gap. Salesforce partial-fit gaps named + mitigations (vendor-neutral orchestration → Agent Fabric; sovereign LLMs → BYO; deep non-SF SoR → MuleSoft + zero-copy; cross-vendor observability → Visualizer). Raw quirk: Move (e) "gates (a) (c) (e)" is self-referential; retained verbatim.
- Orphan wikilinks introduced: entities/executives/gerhard-mack (already merged in Batch C)

## [2026-07-09] merge | wiki/entities/executives/yiyi-tang.md

- Page type: executive (role-customer, VWFS Specialty batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 2 (vw-sam-contacts L474 + vw-one-number channel index)
- Review round: 1
- Key claims: Customer / CARIAD SE / Large Solution ONE.CRM System Architect (Org62 title verbatim); email yiyi.tang@volkswagen.de; Contact Id 0033y00002JrKprAAF; last-touched 2026-04-17. 3 Slack touchpoints on #vw-one-number: 2023-10-27 (Matthias Buba "core Cariad, Yiyi team" post-Genesys/AWS Connect), 2023-10-30 (Sanjay Patidar "Yiyi VW Ireland use case showcase"), 2024-02-01 (Bernd Ritz relaying Jürgen Heim — Yiyi attended Dec 11 2023 Genesys+SF demo). Adjacent: Torben Bendlin (CARIAD peer, SCV/PO markup thread) + Matthias Knapp (VW SAM group-central). Naming note: One.CRM vs One Number distinct workstreams — Yiyi appears in both; scope coincidence not semantic overlap.
- Orphan wikilinks introduced: entities/accounts/vw-sam (not yet an existing page)

## [2026-07-09] merge | wiki/entities/executives/andreas-seitz.md

- Page type: executive (role-customer, VWFS Specialty batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 5 (vw-sam-contacts L141 + vw-group-italia-contacts L38 + vw-sam-activities L287/295/344/349/483 + audi-ag-activities L18 + audi-agentforce-meta index)
- Review round: 1
- Key claims: Customer / Audi AG / Large Solution Architect ONE.CRM (verbatim on both contact records); email andreas2.seitz@audi.de; last-touched 2026-05-10 both. Cross-entity presence: VW SAM (Id 0030M00002Ega08QAB) + VW Group Italia (Id 0030M00002FztuXQAR). Slack alias "Andy Seitz"; Org62 alias "Andreas Seitz" — same person. Operational cadence: (a) recurring "Abstimmung Knowledge Management @ AUDI" with Miro Döring 2026-06-02 + 2026-06-09; (b) Julia Wahlfeldt Status Check cadence 2026-05-05 / 2026-06-02 / 2026-06-08; (c) Audi F1 Lizenzübernahme 2026-06-19 with Katrin Dueber + [[entities/executives/eric-speisser|Eric Speisser]] + Anne Bögershausen. Public statement (paraphrased via Anne B. relay 2025-07-15): "sees approach with Charles critically. Data Cloud integration and Sales Workplace integration are big weaknesses" — customer-side architectural veto voice on Audi Meta motion. Parallel role to Yiyi Tang (CARIAD).
- Orphan wikilinks introduced: entities/accounts/vw-sam (not yet an existing page)

## [2026-07-09] merge | wiki/opportunities/vw-sam-renewal-81-sfa.md

- Page type: opportunity (Top-8 Opportunities batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no Slack thread names Opp Id directly; SELA context inferred from account-scope traffic), completeness PASS
- Sources consulted: 7 (Org62 opp+account+contracts + volkswagen-global-renewal channel index + Australia SELA thread; predecessor Renewal 170/290 opps)
- Review round: 1
- Key finding: Largest open VW opp at $52.5M (Amount) closing 2030-01-31. Six 2030-01-31-terminating contracts already Activated on the vw-sam Org62 record. Opp Description blank — MEDDPICC skeletal. Predecessor Renewal 170 Performance (Won 2025-01-31) Description: "5yr renewal; $37.3M PACV — Core $19M + MC $10.9M + Mulesoft $4.9M; transfer/swap rights; annual price adjustment via true-up." [[entities/executives/yuliya-siuld|Yuliya Siuld]] successor motion identified (Emily+Ricardo Dublin SOPS team).
- Orphan wikilinks introduced: entities/accounts/vw-sam

## [2026-07-09] merge | wiki/opportunities/porsche-ag-renewal-2-sfa.md

- Page type: opportunity (Top-8 Opportunities batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (opp Description blank; no Slack thread names Opp Id), completeness PASS
- Sources consulted: 9 (Org62 opp+account+contracts+activities + 3 related closed Won opps + 1 dead opp)
- Review round: 1
- Key finding: Second-largest open VW opp at $4.80M closing 2032-05-27. Six 84-month contracts activated 2025-05-28 → 2032-05-27 (5 of them cross-verified). Opp created 24 hrs after Won prior renewal `0063y00001BOwBkAAL` closed. Owner [[entities/executives/patrick-schreier|Patrick Schreier]] (not primary account owner [[entities/executives/ilana-heimbring|Ilana Heimbring]]) — split-ownership pattern.
- Orphan wikilinks introduced: entities/accounts/porsche-ag

## [2026-07-09] merge | wiki/opportunities/vw-de-mexico-autocloud-implement.md

- Page type: opportunity (Top-8 Opportunities batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no dedicated VW MX Slack channel), completeness PASS
- Sources consulted: 6 (Org62 opp+prior-lost-opp+account+activities + 3 historic dead opps)
- Review round: 1
- Key finding: $2.30M SOW (Services GTM), Stage 02 Scoping close 2027-01-15, Daniel Isunza owner. Regenerated 2026-02-05 nine months after prior AutoCloud opp `0063y00001AwH4sAAF` closed Dead-Lost at $600k on 2025-05-21. Amount stepped up ~4×. Activity ledger dominated by dealer-network CNM/LVM operational calls, not MEDDPICC discovery.
- Orphan wikilinks introduced: entities/accounts/vw-de-mexico

## [2026-07-09] merge | wiki/opportunities/dieteren-renewal-218-performance.md

- Page type: opportunity (Top-8 Opportunities batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no D'Ieteren Slack channel), completeness PASS
- Sources consulted: 10 (Org62 opp+account+contracts+activities + 4 predecessor/parallel opps)
- Review round: 1
- Key finding: $901.93k Renewal (Barry Abid owner, closing 2027-11-30). Predecessor cadence: 2018 Won $613k → 2022 Won $821k → 2027 pending $902k, 4-year cycle at ~10% CAGR. Parallel AELA motion (see [[opportunities/dieteren-crm-strategy-aela]]) at Stage 05 closing 2026-07-29 could supersede.
- Orphan wikilinks introduced: entities/accounts/dieteren-automotive

## [2026-07-09] merge | wiki/opportunities/dieteren-crm-strategy-aela.md

- Page type: opportunity (Top-8 Opportunities batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no D'Ieteren Slack; deep-dive AELA proposal artefact FY27_4416 referenced by event subject only), completeness PASS
- Sources consulted: 8 (Org62 opp+upside-sibling+parallel-renewal+account+contracts+activities)
- Review round: 1
- Key finding: $650.18k New Business (Emilie Vanoverberghe owner, closing 2026-07-29 = 20 days out). Stage 05 Negotiating $$ & Mutual Plan. Upside sibling `006ed00000f2gA1AAI` at $610k same close = combined AELA envelope in negotiation ~$1.26M. Salomon Abebe involvement in 2026-06-30 Pricing Signature at Renewal event = discount authorization pending. Six back-to-back deep-dive AELA proposal + Capability Map + Business Value Proposition sessions Jun 2026.
- Orphan wikilinks introduced: (none new; account orphan already referenced above)

## [2026-07-09] merge | wiki/opportunities/powerco-battery-pass-infa.md

- Page type: opportunity (Top-8 Opportunities batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no PowerCo Slack channel; opp only 22 days old), completeness PASS
- Sources consulted: 7 (Org62 opp+sibling-INFA-opp+account+activities+contracts + 3 historic dead opps)
- Review round: 1
- Key finding: $349.39k Add-On Business (Julia Wahlfeldt owner, closing 2027-04-23). Regulatory-driven EU Battery Passport scope. Sibling `006ed00000QOu6zAAD` INFA CDGC Amend at $109.93k Stage 03 closing 2026-10-15 (Julia Wahlfeldt owner) = sequenced INFA motion, base $110k + upsized $349k. Zero contracts returned on PowerCo Org62 query = no confirmed installed baseline despite Type=Add-On. Anne Bögershausen–owned account with `#royal` tag = under group-level attention.
- Orphan wikilinks introduced: entities/accounts/powerco

## [2026-07-09] merge | wiki/opportunities/ducati-b2b-commerce-bdr.md

- Page type: opportunity (Top-8 Opportunities batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 10 (Org62 opp+account+contracts+activities + 4 related opps + VW Group Italia Slack channel where [[entities/executives/davide-vigano|Davide Viganò]] said "Valid for Lamborghini, Ducati and Volkswagen" 2026-03-06)
- Review round: 1
- Key finding: $285k New Business B2B Commerce BDR (Davide Viganò owner, closing 2027-01-29). RFP New OM System for CAS active per 2026-07-08 activity — competitive OM/Commerce field in play. Prior BDR `006ed00000Qd2nlAAB` (Agentforce Enterprise) closed Dead-No-Decision 2026-02-23 at $200k = same account/owner history of stalling BDRs. Elena maternity leave (from mid-2026-Q2 per Davide Viganò 2026-03-20 Slack summary) is a customer-side stability risk touching Ducati per "Valid for Lamborghini, Ducati and Volkswagen".
- Orphan wikilinks introduced: entities/accounts/ducati

## [2026-07-09] merge | wiki/opportunities/vw-group-espana-renewal-198-call-center.md

- Page type: opportunity (Top-8 Opportunities batch)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no Iberia Slack channel), completeness PASS
- Sources consulted: 10 (Org62 opp+account+contracts+activities + 4 predecessor Won opps + volkswagen-global-renewal absence signal)
- Review round: 1
- Key finding: $284.97k Renewal (Veronica Manuel Salvador owner, closing 2028-01-30 matches Activated contract 04181157 36-month end). "Local" outside-SELA renewal cadence (predecessor Descriptions "Renewed local; OFs sent for signature 2nd Dec." + "Renewal local; PO+signature push."). Renewal step-down 2024 $287k → 2025 $267k = declining not growing. CH2/Hyperforce migration workstream parallel (Pedro Velasco, 2026-06-26/2026-07-01 events). Bi-weekly [[entities/executives/andrea-escortell|Andrea Escortell]] + Mario Lopez cadence booked through 2027-02-22.
- Orphan wikilinks introduced: entities/accounts/vw-group-espana

## [2026-07-09] merge | wiki/overview.md

- Page type: synthesis (Group Overview — Tier 0)
- Verifier verdicts: citation PASS, contradiction PASS_WITH_FLAGS (46-vs-48 page-count drift between orchestrator prompt and filesystem), coverage PASS, completeness PASS
- Sources consulted: 13 wiki pages (11 required by orchestrator + grip-transform.md + index.md) — cites wiki, not raw, per synthesis-page convention
- Review round: 1
- Key content: Replaces 15-line placeholder with ~250-line group-overview synthesis. Group at a glance / Salesforce relationship (SAM SELA vehicle + $52.5M Renewal 81 SFA pipeline / $38.4M Renewal 170 baseline) / 5 hot workstreams (VW UK D360 £12M, VWFS Transformation FY27, One.CRM OEM Business Platform blocker, Škoda 805h/week, VWG After Sales × Spread.AI) / top-8 stakeholders (Bögershausen, Fuchs, Trott, Kretzberg, Mack, Emmerich, Paulini, Dimitrov) / depth-vs-thin coverage inventory (48 pages exist; Bentley/Porsche/MAN/PowerCo/Traton/Lamborghini/SEAT gaps) / 5 prioritised next moves (Move (e) validation, Kretzberg DF26 brief, SIC Munich 2026-07-10, Ducati B2B + PowerCo Battery Pass briefs, Bentley/Porsche/MAN/PowerCo entity pages, Anne Bögershausen exec page).
- Contradiction surfaced: prompt-said-46-pages vs filesystem-48-pages (15 accounts + 10 execs + 5 vendors + 6 initiatives + 8 opps + 2 competitive + 1 capability + 1 timeline = 48). Logged in-page + flagged in frontmatter review_flags.
- Also updated: wiki/index.md — added "Group Overview" header pointer at top.

## [2026-07-09] merge | wiki/entities/accounts/vw-sam.md

- Page type: account (Orphan-account batch — Tier 1 group-central licensing shell)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no dedicated Slack channel; 2,365 of 2,368 opps not enumerated; 679-contact table selection-only; sibling parking/placeholder/CoE Org62 IDs deprioritised per hierarchy.md), completeness PASS
- Sources consulted: 9 (Org62 account + hierarchy + contracts + contacts + activities + 3 opps)
- Review round: 1
- Key findings: Snapshot rebuilt around Bögershausen–owned Group-central licensing role and 5-year SELA-envelope terminating 2030-01-31 (five 60-month + one 50-month contracts activated 2025-02-01/2025-12-01 through 2030-01-31). Renewal 170 Description PACV composition ($37.3M PACV = Core $19M + MC $10.9M + Mulesoft $4.9M) restored. MuleSoft "neues Lizenzmodell" evaluation surfaced 2026-06-29 (Matthias Knapp / Daniel Ludwig). Weekly Salesforce Lizenz Jour Fixe cadence (Thomas Gerdes / Niels Schulz) booked through 2027-07-08 = origin of forward-dated LastActivityDate. AnnualRevenue $152M vs Employees 577,143 mismatch flagged as data-quality contradiction.
- Orphan wikilinks introduced: (none new — [[entities/executives/andreas-seitz]], [[entities/executives/yiyi-tang]], [[opportunities/vw-sam-renewal-81-sfa]], [[entities/accounts/vw-ag]], [[entities/accounts/vw-group-italia]], [[initiatives/one-crm]], [[initiatives/agentforce-momentum-120]] all already exist)

## [2026-07-09] merge | wiki/entities/accounts/porsche-ag.md

- Page type: account (Orphan-account batch — Tier 2 Sports/Luxury)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (only Porsche Bank AG Slack channel present, not Porsche AG manufacturer; 222 of 227 opps not enumerated; 414 contacts selection-only), completeness PASS
- Sources consulted: 11 (Org62 account + hierarchy + contracts + contacts + activities + 5 opps)
- Review round: 1
- Key findings: Split-ownership pattern confirmed (Patrick Schreier renewal / Ilana Heimbring account) matching VW SAM pattern; parent = Porsche Holding Stuttgart GmbH → ultimate = Ferdinand Porsche Familien-Privatstiftung (per hierarchy.md). Three Won C@P Replacement opps 2025-2026 establish Agentforce + Sales/Service/Marketing/Data footprint; Sixth 84-month contract cohort activated 2025-05-28 → 2032-05-27. Currently in play: MuleSoft on-site 2026-07-09 (Lars Pfeiffer), Porsche E-Bike Agentforce (Oliver Piesch), Digital Wallet (Jana Janzek). CEO Kjell Gruner + CMO Robert Ader + Chief Architect Matthias Kloppmann + IT/CRM PM Michael de Clara identified as customer-side stakeholders on contact table.
- Orphan wikilinks introduced: (none new)

## [2026-07-09] merge | wiki/entities/accounts/vw-de-mexico.md

- Page type: account (Orphan-account batch — Tier 2 LATAM NSC + manufacturing)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no dedicated Slack channel; 237 of 238 opps not enumerated; 517 contacts selection-only), completeness PASS
- Sources consulted: 7 (Org62 account + hierarchy + contracts + contacts + activities + 1 opp)
- Review round: 1
- Key findings: MDM parent record `001ed0000138351AAA` is a self-parent duplicate (same legal name as operating record). Data 360 onboarding motion active May-June 2026 (6-email thread, Salvador Pineda Flores customer-side IT Area Manager + Vaishnavi Mallak Salesforce). WhatsApp licensing alignment thread active 2026-07-06. Tableau purchase-order workstream active. Past-due invoice collection pattern (2026-05-01, 2026-05-08, 2026-07-01) concurrent with active $2.30M SOW = commercial-health flag. VWFS.com-domain contacts on manufacturer record (Martinez Bautista, Montes Montes) match VW do Brasil pattern (VWFS operates through manufacturer record).
- Orphan wikilinks introduced: (none new)

## [2026-07-09] merge | wiki/entities/accounts/dieteren-automotive.md

- Page type: account (Orphan-account batch — Tier 2 Adjacent / Importer Belux)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no D'Ieteren Slack; 363 of 365 opps not enumerated; 247 contacts selection-only), completeness PASS
- Sources consulted: 8 (Org62 account + hierarchy + contracts + contacts + activities + 2 opps)
- Review round: 1
- Key findings: Parent = D'Ieteren Group (per hierarchy.md Tier 2 — Adjacent / Importer). 60-month contract `03285057` activated 2022-12-01 → 2027-11-30 anchors current SELA envelope matching Renewal 218 close date. Dual-hat owner pattern (Emilie Vanoverberghe owns both account AND AELA opp) — differs from VW SAM/Porsche split-ownership. Combined AELA envelope ~$1.26M in negotiation with $610k upside sibling. Monthly customer-cadence with Alban Delsart (IT CRM Manager) booked through 2027-07-12. Customer stakeholders identified: CIO Giovanni Palmieri, CCO Stefan Kerckhoven, Chief Aftersales & Operations Officer Claude Willaert.
- Orphan wikilinks introduced: (none new — [[opportunities/dieteren-renewal-218-performance]], [[opportunities/dieteren-crm-strategy-aela]] exist)

## [2026-07-09] merge | wiki/entities/accounts/powerco.md

- Page type: account (Orphan-account batch — Tier 2 Batteries)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no dedicated Slack; 6 of 7 opps not enumerated; SIC/Industry mis-classification flagged; contract baseline anomaly flagged), completeness PASS
- Sources consulted: 7 (Org62 account + hierarchy + contracts + contacts + activities + 1 opp)
- Review round: 1
- Key findings: Zero contacts + zero contracts on record itself despite active Type=Add-On Business $349k Battery Pass INFA opp — an anomaly documented in-page as either (a) young shell, (b) baseline contracted through parent (VW SAM candidate), or (c) contact records under different account key. Industry field = Healthcare & Life Sciences and SIC = 8731 (Commercial Physical & Biological Research) — data-quality bugs on a battery-cell company. `#royal` tag on Description = group-level executive attention despite Rating unset. Net Zero Cloud (NZC) motion active 2025-05 → 2025-09 (Luka Enking + Julia Schleussner). Cross-entity PowerCo-domain contacts (Xuezhi Tang / Tang Xuezhi Cell Expert) live on VW SAM contact table, not PowerCo.
- Orphan wikilinks introduced: (none new — [[opportunities/powerco-battery-pass-infa]] exists)

## [2026-07-09] merge | wiki/entities/accounts/ducati.md

- Page type: account (Orphan-account batch — Tier 2 Sports/Luxury Italian)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no dedicated Slack; VW Group Italia SpA Slack cited for 2026-03-06 Viganò "Valid for Lamborghini, Ducati and Volkswagen"; 234 of 235 opps not enumerated; 170 contacts selection-only), completeness PASS
- Sources consulted: 8 (Org62 account + hierarchy + contracts + contacts + activities + 1 opp + 1 Slack channel index)
- Review round: 1
- Key findings: Parent = Volkswagen Finance Luxemburg S.A. (per hierarchy.md, shared with Škoda + Seat + Bentley + Lamborghini + Traton + MAN + Scania). Only VW-family entity with SIC 3751 = Motorcycles. Davide Viganò owns Ducati + Lamborghini + [[entities/accounts/vw-group-italia]]. Active bakeoff: "RFP New OM System for CAS - Revisione Licenze" 2026-07-08 (marco fiorini / Davide Viganò). Multiple 2026-06-29 → 2026-07-08 "SF & CAP Ducati" AE syncs (SI partner "CAP" scope unresolved). Agentic AI motion under review 2026-06-19. CIO Dry Run 2026-06-17. Named customer stakeholders: CFO Henning Jens, CDO Lorenzo Aratari, CISO Alessandro Iervolino, Head of Cloud Gerasis Gerasimos. Florence Consulting integration developers on contact table (MuleSoft footprint implied).
- Orphan wikilinks introduced: (none new)

## [2026-07-09] merge | wiki/entities/accounts/vw-group-espana.md

- Page type: account (Orphan-account batch — Tier 2 Regional NSC Iberia)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no Iberia Slack; zero contacts on record; 196 of 197 opps not enumerated; Deloitte D360 EU Scaling Spain won-RFP not confirmed on this specific account), completeness PASS
- Sources consulted: 7 (Org62 account + hierarchy + contracts + contacts + activities + 1 opp)
- Review round: 1
- Key findings: Parent = Volkswagen Finance Luxemburg S.A. (per hierarchy.md Tier 2 — Regional NSCs). Website = www.audi.es despite VW Group name — Iberia distributor primarily distributes Audi in Spanish market. Andrea Escortell also owns Seat S.A. per hierarchy.md. Zero direct contacts returned on the record — same anomaly as PowerCo; Mario Lopez Moreno (customer-side counterpart in bi-weekly cadence) lives on the [[entities/accounts/vw-sam]] contact table. CH2/Hyperforce migration workstream active 2026-06-26 → 2026-07-01 (Pedro Velasco). Bi-weekly Andrea Escortell + Mario Lopez cadence booked through 2027-02-22. Renewal 198 step-down cadence flagged (2024 $287k → 2025 $267k → 2028 $284k, declining not growing).
- Orphan wikilinks introduced: (none new — [[opportunities/vw-group-espana-renewal-198-call-center]] exists; [[entities/accounts/seat]] referenced but not yet existing = 1 new orphan wikilink candidate to backlog)

## [2026-07-09] merge | wiki/entities/accounts/lamborghini.md

- Page type: account (Missing-accounts batch B — Tier 2 Sports/Luxury Italian)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no dedicated Lamborghini Slack; 5 of 238 opps read; 160 contacts selection-only), completeness PASS
- Sources consulted: 12 (Org62 account + hierarchy + contracts + contacts + activities + 5 opps + 1 Slack channel index)
- Review round: 1
- Key findings: Parent = Volkswagen Finance Luxemburg S.A. (per hierarchy.md, shared with Škoda + Seat + Bentley + Ducati + Traton + MAN + Scania). Davide Vigano owns Lamborghini + [[entities/accounts/ducati]] + [[entities/accounts/vw-group-italia]]. Active workstreams: Security Center (2026-06-17/26 recurring events with Elisa Romano + Filippo Tonutti + Gabriella Romano), Einstein→Agentforce migration (2026-06-08), Industry Summit Munich prep (2026-06-15/23). Modern SELA-envelope: two 60-month contracts 04172413 + 04172613 (2025-02-01 → 2030-01-31) Activated. Two imminent-expiry Activated contracts (02689226 2026-07-12, 03566815 2026-07-30) — renewal opps not visible in the 5 opps read. Historical opp pattern: 5-of-5 read are Dead (CPQ 2021-05, VW SELA 2.0 2021-01, DC pilot 2025-02, MC Data Cloud 2024-02, B2B Commerce Wave2 2025-04). Deloitte Italy + Florence Consulting on contact table = SI presence. Pre-scheduled FY27Q2 AWT Milano Follow-Up tasks 2026-08-07.
- Orphan wikilinks introduced: (none new — [[entities/accounts/ducati]], [[entities/accounts/vw-group-italia]] exist; [[entities/accounts/skoda-auto-cz]] referenced as candidate not yet existing)

## [2026-07-09] merge | wiki/entities/executives/michelle-rubio.md

- Page type: executive (Missing-execs batch B — role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (Slack channel #account-vw-fy23 dormant since 2023-12-15; post-2023 NAR channels not yet ingested), completeness PASS
- Sources consulted: 6 (Org62 audi-of-america account + hierarchy + activities + contracts + Slack account-vw-fy23 channel index + audi-of-america account md)
- Review round: 1
- Key claims: Slack UID U01G8Q0C50S (Michelle Rubio-Cegelka); Core AD on `#account-vw-fy23` channel roster; owner on Audi of America (`0013000000ZlK9bAAF`, 455 opps $38.4M) + VW Group of America Fleet Sales (`001000000027wMkAAI`) per hierarchy.md; contract 02761709 (6-month, 2021-09-27 → 2022-03-26, Expired) Owner Rubio; 2026-06-10 VW ITSM Product Call attendee (Cynthia Johnson contact); 2026-07-27 Audi | Salesforce Dinner Hold scheduled Rubio-owned.
- Orphan wikilinks introduced: (none new — [[entities/accounts/audi-of-america]] + [[entities/accounts/vw-group-of-america]] exist)

## [2026-07-09] merge | wiki/entities/executives/beatriz-mantovanini.md

- Page type: executive (Missing-execs batch B — role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (only 5 of 157 VW do Brasil opps ingested), completeness PASS
- Sources consulted: 12 (Org62 vw-do-brasil account/hierarchy/activities/contracts + 3 opp JSON/MD pairs + Slack vw-brazil-team channel)
- Review round: 1
- Key claims: Slack UID U02HU74N7T2 on `#vw-brazil-team`; owner on VW do Brasil (`0013000000IkqxBAAR`, 157 opps $4.7M); historical opp owner on three Dead opps 2019-2022 ($1.68M CSS Dead-Duplicate, $1.15M Contact Center Dead-No Opportunity, $313k CSS+Partner Community Dead-Duplicate); contract activator on 04064516 + 03968001 (both Term 3 months, Expired, 2024); 5x 2026-05-31 Agentforce World Tour São Paulo Follow-Up tasks Not Started. Ownership drift flagged: 2025-01-31 renewal Won by Augusto Yuji Tanabe, not Mantovanini.
- Orphan wikilinks introduced: (none new)

## [2026-07-09] merge | wiki/entities/executives/davide-vigano.md

- Page type: executive (Missing-execs batch B — role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS_WITH_FLAGS (VW Group Italia Org62 Owner is Anne Bögershausen per hierarchy.md, not Viganò as prompt implied — divergence documented in-page), coverage PASS_WITH_FLAGS (only 3 opps ingested across 473 Lamborghini+Ducati combined), completeness PASS
- Sources consulted: 16 (Org62 lamborghini+ducati account/hierarchy/contracts/activities + 3 opps + Slack VW Group Italia SpA channel index + 1 thread)
- Review round: 1
- Key claims: Slack UID U01K66ZT464; owner on Lamborghini (`00130000002xI5sAAE`, 238 opps $7.9M) + Ducati (`00130000002xIo5AAE`, 235 opps $9.0M); creator of `#ZC:C0AH2E30G1Y:Volkswagen Group Italia SpA` (2026-02-25); author of pivotal 2026-03-06 "Valid for Lamborghini, Ducati and Volkswagen" line; author of 2026-03-20 Elena maternity-leave / mid-May close deadline summary (data management CIO priority via Informatica-Daniele Daqua; Service Voice doubling; Signature-vs-PSP January budget; Agentforce interest); active Ducati "RFP New OM System for CAS" 2026-07-08 + Lamborghini Einstein→Agentforce migration 2026-06-08. VW Group Italia Org62 ownership contradiction with hierarchy.md flagged.
- Orphan wikilinks introduced: (none new)

## [2026-07-09] merge | wiki/entities/executives/ingrid-prowse.md

- Page type: executive (Missing-execs batch B — role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS_WITH_FLAGS (VW Group Sales ME BillingCountry=AE / ShippingCountry=AU / Website=volkswagen.com.au / parent=VGA — documented org-model quirk), coverage PASS_WITH_FLAGS (no Prowse-authored Slack; VW Australia SELA roll-in is a strong synthesis-page candidate), completeness PASS
- Sources consulted: 9 (Org62 vw-group-australia + vw-group-sales-me account/hierarchy + VGA contracts + activities + Slack volkswagen-global-renewal channel index + 2025-02-11 SELA roll-in thread)
- Review round: 1
- Key claims: Owner on VW Group Australia (`0010M00001Qkr7FQAR`, 275 opps $11.6M) + VW Group Sales Middle East FZCO (`0013000000LBbNKAA1`, 232 opps $9.9M); three Expired VGA contracts activated (05571145 / 04396833 / 04340532); recurring monthly `VW x Salesforce | Monthly Review` cadence booked 2026-07-14 through 2027-07-13; Deloitte fortnightly alignment on VGA account (2026-05-29); Feb 2025 VW Australia SELA roll-in crisis (contract 03791546 auto-renew Feb 13 at 9% uplift; $854k vs $968k ACV $100k attrition; Ryan Harris 30-day extension; Yuliya Siuld Feb 14 SELA provisioning; Sammi Pang confirmation "went around the globe to get sorted").
- Orphan wikilinks introduced: entities/accounts/vw-group-sales-me + synthesis/vw-australia-sela-rollin (both new)

## [2026-07-09] merge | wiki/entities/executives/christiane-gockner.md

- Page type: executive (Missing-execs batch B — role-customer-partner, SPREAD.AI)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (single-source page: only VWG × Salesforce × SPREAD partnership update deck 20260508 traces here; no Slack Gockner hits yet), completeness PASS
- Sources consulted: 1 (raw/drive/slides/vwg-salesforce-spread-partnership-update-20260508.md)
- Review round: 1
- Key claims: SPREAD.AI, L2 Program Steering (VWG × SPREAD After Sales Partnership); GDAS SteerCo Operational Lead ("Salesforce — TBD · Spread.ai — C. Gockner · VW — TBD"); L2 seat "Owns the roadmap, manages risks across streams, escalates to Executive Sponsorship" — described as "engine room" of the six-layer governance; escalation path is Stefan Imme (L1 GDAS Executive Sponsor); L4 architecture peer Gerhard Mack. First name "Christiane" comes from L2 line ("Spread.ai Christiane Gockner"); Operational Leads line uses initial-only "C. Gockner".
- Orphan wikilinks introduced: entities/executives/stefan-imme (new); other wikilinks resolve to existing pages ([[entities/executives/gerhard-mack]], [[entities/vendors/spread-ai]], [[competitive/palantir-ontology-vs-sf-spread]])

## [2026-07-09] merge | wiki/entities/accounts/bugatti.md

- Page type: account (Missing-accounts batch B — Tier 2 Sports/Luxury French, Bugatti-Rimac JV)
- Verifier verdicts: citation PASS, contradiction PASS_WITH_FLAGS (AnnualRevenue $263.6B likely mis-keyed anomaly; structural parent difference vs sibling luxury brands), coverage PASS_WITH_FLAGS (no dedicated Bugatti Slack; no cross-channel Slack mention found; 5 of 90 opps read; 34 contacts read in full), completeness PASS
- Sources consulted: 11 (Org62 account + hierarchy + contracts + contacts + activities + 5 opps)
- Review round: 1
- Key findings: Parent = Rimac Group d.o.o. (Bugatti-Rimac JV) — only Tier 2 Sports/Luxury sibling NOT parenting to VW Finance Luxemburg. AnnualRevenue field $263,589,527,804 = obvious Org62 mis-key on 376-employee hypercar company (three orders of magnitude off). MC Pro → MC Advanced upgrade landed 2026-01-20/21 (Q-10829074 + Q-11194506) to Hendrik Malinowski MD; contract 05476509 Activated 47-month 2026-02-01 → 2029-12-31. Renewal 80 SFA opp 006ed000004LFPxAAO Stage 01 Initiate $134.5k close 2029-12-31 (~8% step-up from Renewal 70 Won $124.3k 2024-10-31). Active workstreams: Whatsapp channel (recurring 2026-05-29 → 2026-06-10), Partner Community/PRM (2026-05-26 multi-event), Data 360 onboarding (2026-02-04 five-contact wave), Security Paris Petit-déjeuner (2026-06-18). MuleSoft SAP connectivity Dead-Lost 2025-09-30. "Rimac to Automobile" transfer motion 2026-04-11 = active org-modelling reconciliation. Reply.de = 9-contact SI partner footprint. VW-internal Salesforce Solution Architect Holger Knopf on contact table. Storage-limit warnings 2026-05 → 2026-06 (Findis + SYNEDIS SAS).
- Orphan wikilinks introduced: (none new — [[entities/accounts/lamborghini]], [[entities/accounts/ducati]], [[entities/vendors/mulesoft]] referenced and exist; [[entities/accounts/skoda-auto-cz]] referenced as candidate not yet existing)

## [2026-07-09] merge | wiki/entities/executives/anne-bogershausen.md

- Page type: executive (Missing-execs batch A — PRIMARY, role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (Anne referenced across ~40+ raw files — 12 diverse sources sampled; per-opp enumeration deferred), completeness PASS
- Sources consulted: 26 (11 Org62 top-of-tree accounts she owns + 11 Slack channels she participates on + `#vw-one-number` channel she created 2022-07-14 + 3 Drive files including 2026-01-29 VWG After Sales blocker meeting Gemini notes + VWFS stakeholder overview sheet)
- Review round: 1
- Key claims: Primary VW Group AE for Salesforce; Org62 owner on VW AG, Audi AG, CARIAD SE, VW SAM, Diconium, VW Motorsport, VW Group Services, VW Group Ireland, VW Group Italia, PowerCo, TRATON; creator of `#vw-one-number` (2022-07-14 SCV/AWS billing master channel); author of 2025-03-24 GOC pricing pushback thread on `#vw-agentforce` (VW POV: no license fees for dealers, only usage; Agent Session <10 cents; 40M€/year for one use case if 1/3 of 40M workshop passes EU); channel through which Andy Seitz Audi Meta architectural veto reached Salesforce (2025-07-15); CARIAD DDD/DBA RFP forwarder ("Stefan suspects Palantir-related tender"); Deloitte / Martin Sander Cost of Sales meeting 2026-06-24; VW AG SIC Munich July 10 2026 prep participant.
- Orphan wikilinks introduced: (none new — all named execs/entities already exist)

## [2026-07-09] merge | wiki/entities/executives/thomas-fuchs.md

- Page type: executive (Missing-execs batch A — role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (peripheral R&R + AI questionnaire + service PoV decks not consulted at page level; likely name Fuchs but out-of-shape for AE page), completeness PASS
- Sources consulted: 20 (Org62 VWFS AG + VW Leasing accounts + 3 opps + activity ledger + `#vw-brand` channel he created 2024-09-24 + 9 VWFS + VW-Group Slack channels he participates on + 3 Drive files including FY27 CRM Architecture deck he authored for July 14 2026 readout + SIC feedback deck + VWFS stakeholder sheet)
- Review round: 1
- Key claims: Salesforce AE for VWFS AG + VW Leasing (Org62 owner); creator of `#vw-brand` (2024-09-24); author of the 213-slide `fy27-vwfs-crm-architecture-20260714.md` (drive_owner tfuchs@salesforce.com); SIC 2026-05-21 speaker roster "[[entities/executives/thomas-fuchs|Thomas Fuchs]] — Account Executive"; sponsor on 4 VWFS customer stakeholders (Uphoff, Voigt, Babic, Behnke) + co-sponsor Petra Faeth per Claudia Garz sheet; 2025-01-28 Strategic SteerCo positioning "That is why the CTO needs to be talking to Caro + Henning + Petra and not too much to all in the team."
- Orphan wikilinks introduced: (none new)

## [2026-07-09] merge | wiki/entities/executives/jessica-geutner.md

- Page type: executive (Missing-execs batch A — role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 4 (sic-amer-volkswagen-financial-5-21 index + skoda-sic-sf-january index + sic-skoda-auto-1-9 index + vwfs-x-salesforce-sic-feedback-wip-20260602 deck)
- Review round: 1
- Key claims: CCO EMEA Central; SIC 2026-05-21 speaker slot "Our Vision for VWFS" 12:45–13:30; author of the 2026-05-22 VICTORY POST recapping the SIC ("What a day...", "Special thanks to Muralidhar Krishnaprasad", Kretzberg quote "Tell us how it could work — and we will support you", seven Next Steps); co-owner (with Silke Sommerfeld) of Kretzberg's post-SIC "3-monthly Check-In with Key Stakeholders" workstream; historic Škoda SIC 2022–2023 participant.
- Orphan wikilinks introduced: (none new)

## [2026-07-09] merge | wiki/entities/executives/silke-sommerfeld.md

- Page type: executive (Missing-execs batch A — role-salesforce-team)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 9 (sic-amer channel + vwfs-prof-services channel + SIC feedback deck + Stefan Imme exec summary + PoV Get-to-Know deck + Success Metrics BV deck + internal R&R deck + external R&R deck + VWFS AG activity ledger)
- Review round: 1
- Key claims: AVP Key Accounts; SIC 2026-05-21 opening-agenda owner ("Blazing a Trail Forward" + "Welcome & Status of Partnership" 09:15–09:30); Kretzberg's primary Salesforce relationship channel per Stefan Imme's "Alena/Silke" board reach-out pattern + Damien Mongrand's 2025-07-17 "Silke/Alena email PDF interactions"; sole owner of Kretzberg's post-SIC "Dreamforce 2026 invitation" workstream; co-owner (with Geutner) of "3-monthly Check-In"; paired with Dirk Schneider on VWFS Service R&R; recurring "[VWFS] Strategic Meeting with Salesforce" cadence with Jens König booked through 2026-12-16.
- Orphan wikilinks introduced: (none new — [[entities/executives/stefan-imme]] cross-batch reference; page merged same day)

## [2026-07-09] merge | wiki/entities/executives/stefan-imme.md

- Page type: executive (Missing-execs batch A — role-customer)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 7 (Stefan Imme's own VWFS Service GER Exec Summary 2025-07-02 + VWG × Salesforce + SPREAD Partnership Update 2026-05-08 + VWFS stakeholder sheet + `#vw-aes` index + `#vwfs-agentforce-pitch-braunschweig` index + `#volkswagen-data-cloud-adoption-scaling` index + `raw/org62/activities/vw-sam-activities.md`)
- Review round: 1
- Key claims: Customer / VWG IT; author of the 2025-07-02 VWFS Service GER Exec Summary — source of the "80M Salesforce Invest with little Business Value" line + the "Ask to Stefan" 5-bullet framing + "Alena/Silke — Dahlheim/? — Manuela/Silke" board-reach-out map; L1 GDAS Executive Sponsor for VWG After Sales × Salesforce × SPREAD partnership; "Previously founder of Digital Unit in VWFS — unsuccessful project could reflect on him" (Claudia Garz sheet); recurring counterpart in 2023-12-22 → 2024-01-23 VW BAFO/Early Renewal negotiation cycle on `#vw-aes`; Gerhard Mack 2026-06-11 "warned against escalation to Stefan Imme" on VW UK D360 = confirms Imme is executive-escalation target of last resort for VWG-scope Data Cloud issues.
- Orphan wikilinks introduced: (none new — [[entities/executives/christiane-gockner]] resolves to just-merged page)

## [2026-07-09] merge | wiki/entities/accounts/man-truck.md

- Page type: account (Missing-accounts batch B — Tier 2 Commercial vehicles / TRATON sibling)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no dedicated MAN Slack; 5 of 386 opps read all pre-2024 CSG losses; 250 contacts selection-only; TRATON parent chain flag documented in-page), completeness PASS
- Sources consulted: 11 (Org62 account + hierarchy + contracts + contacts + activities + 5 opps)
- Review round: 1
- Key findings: Parent per Org62 ParentId = Volkswagen Finance Luxemburg S.A.; hierarchy.md Notes column describes MAN + Scania under TRATON but Org62 flattens the hierarchy. Owner Ilana Heimbring (also [[entities/accounts/porsche-ag]] owner). 386 opps @ $32.2M lifetime; 5-of-5 read are pre-2024 CSG / Expedition / Advisory Services losses totalling $7.52M ($2.08M House-of-Digital + $1.93M Expedition + $1.5M CSG SOW + $1.01M FY23 Extension + $1M TAs/PEs). Modern SELA-envelope contract 04172536 Activated (60-month, 2025-02-01 → 2030-01-31) matches Lamborghini + Ducati SELA cohort. 85-month contract 02166355 Activated 2019-07-01 → 2026-07-31 = imminent expiry (~3 weeks). Active workstream: 2026-07-23 Executive SIC "MAN x Salesforce: Agentic AI @ Salesforce" (Nicolaus Arntz SVP Head of Sales & Service IT customer-side; Christoph Jentsch + Ilana Heimbring + [[entities/executives/thomas-plack|Thomas Plack]] SF-side); 2026-07-03 SIC prep "Use Case Ideensammlung" email thread. 2026-06-25 FY27 Data+AI Summit Munich Follow-Up pre-scheduled. Named customer execs: CEO Carsten Intra + Arnd Loettgen (dual CEO records — hygiene flag), CIO Stephan Fingerling, VP-Sales Reiner Roessner, SVP-Sales Johan Björnör, EBM R&D Frederik Zohm, EBM Procurement Holger Mandel. Multi-SI footprint: Capgemini (6 contacts) + NTT Data (7 contacts) + Deloitte + ec4u + AEB. MAN Digital Hub `@digitalhub.man` domain (Portugal-anchored engineering hub) surfaced.
- Orphan wikilinks introduced: (none new — [[entities/accounts/traton]] merged same day; [[entities/accounts/porsche-ag]] exists)

## [2026-07-09] merge | wiki/entities/accounts/traton.md

- Page type: account (Missing-accounts batch B — Tier 2 Commercial vehicles / CV holding)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (raw material sparse — 0 contacts, 0 contracts, 4 opps all Dead-BDR, 7 activities; commercial gravity on sibling records; RIO Logistics + TRATON FS + Scania CV AB duplicate flagged as next-round collection candidates), completeness PASS
- Sources consulted: 10 (Org62 account + hierarchy + contracts + contacts + activities + 4 opps)
- Review round: 1
- Key findings: TRATON SE = CV holding for VW Group. hierarchy.md Notes flag "parent of MAN + Scania" but Org62 flattens (all three under VW Finance Luxemburg). Owner Anne Bögershausen. Munich Dachauer Str. 641 (adjacent to MAN at 667 — shared campus). Type null + Rating Tier 3 + Industry "Travel, Transportation, & Hospitality" — hygiene bugs on 87k-employee $34.7B-revenue holding. 4-of-4 lifetime opps Dead-BDR (Service Cloud $13k, Net Zero Cloud $21k+$75k, Tableau $1k, all 2022-2023). 2025-06/07 event series: Jonas Lehmann customer-side + Eric Speisser + Ilana Heimbring pitched "TRATON FS + Salesforce" (2025-06-12), "Scania FS + MAN FS" (2025-06-24), "TFS & Salesforce Intro" (2025-07-10) — 3-step intro that stalled (10-month gap to 2026-05-19 LVM cnm). TFS not modelled as separate Org62 entity.
- Orphan wikilinks introduced: (none new — [[entities/accounts/man-truck]] merged same day)

## [2026-07-09] merge | wiki/entities/accounts/scania.md

- Page type: account (Missing-accounts batch B — Tier 2 Commercial vehicles / TRATON sibling / Swedish)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (raw material sparse — 0 contacts, 1 contract, 4 opps all Riskonnect micro-touches, 8 activities all CNM/POV; Slack signal single-thread on `#vw-ae-se-csg`; Scania CV AB duplicate + Scania FS + France Scania RFP thread as next-round candidates), completeness PASS
- Sources consulted: 11 (Org62 account + hierarchy + contracts + contacts + activities + 4 opps + Slack `#vw-ae-se-csg` index)
- Review round: 1
- Key findings: Scania AB = VW-family Swedish CV brand, Södertälje HQ. Young Org62 record (2025-12-30), Type null, Rating null, `#LeadspaceNoMatchReturned`. Owner Spiros Panagos. 4-of-4 lifetime opps are "Scania AB_Riskonnect" ISV micro-touches ($26.88 → $3,715.20 = total $5,528.64 lifetime) — all Won, all owned by Panagos (except initial Lovisa Falkenberg). Not Salesforce direct pipeline; ISV auto-generated. Single Slack signal: 2025-02-11 Eric Speisser `#vw-ae-se-csg` "France Scania RFP due Thursday. Partner-answered... 9-reply thread." — no follow-through on this record. 2026-04-15 Martin Olsson "Requested Account POV" task = discovery intent, no downstream opp. 6× CNM (Call No Message) cadence 2026-02-02 → 2026-03-02 (Mathias Lundgren target; Vilhelmiina Aalto). SIC 5000 (Wholesale Trade) diverges from sibling MAN 3714 / TRATON 4214.
- Orphan wikilinks introduced: (none new — [[entities/accounts/traton]] + [[entities/accounts/man-truck]] merged same day)

## [2026-07-09] merge | wiki/entities/accounts/porsche-cars-na.md

- Page type: account (Missing-accounts batch B — Tier 2 Sports/Luxury North America / MDM Global Headquarters shell)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (Org62 record is MDM shell with 0 opps / 0 contacts / 0 contracts / 0 activities; opps live under child `00100000002CuDeAAK` per hierarchy.md — not queried; Slack channel `#porsche-cars-north-america-fy27` C0B6Q3PRUQM only index summary ingested, not thread-level; three named Drive artefacts not yet ingested), completeness PASS
- Sources consulted: 7 (Org62 account + hierarchy + contracts + contacts + activities + Slack `#porsche-cars-north-america-fy27` channel index)
- Review round: 1
- Key findings: PCNA = MDM Global Headquarters record (RecordType = Global Headquarters, not Sales), API-Internal-owned system-managed. Parent = Ferdinand Porsche Familien-Privatstiftung (distinct from [[entities/accounts/porsche-ag]] parent Porsche Holding Stuttgart). All Org62 fields except Id/Name/Industry/Website/Country/RecordType/SIC/Employees are null. Zero commercial signal on the record. Active motion sits on Slack `#porsche-cars-north-america-fy27` (25 messages 2026-05-28 → 2026-06-30): Kenzie Duclos $65k proposal with VW SELA pricing + Becca Pearl Agentforce for Automotive next-phase quote + MuleSoft scope submitted to PAG (Porsche AG) for Q3 CY2026 budgeting. "PCNA independent 3-year renewal signed by Martin last year but inside VW SELA umbrella pricing" = key commercial construct. Automotive Cloud vs Agentforce for Automotive Voice-demo question unresolved 2026-06-30. CSM handover Manoj Nagpure → Lalit Singh Chauhan 2026-06-16. Michelle Rubio-Cegelka is [[entities/executives/michelle-rubio]] wiki page CSM lead here + NAR shared. Named customer stakeholders (only first names visible): Martin (main POC, reports to COO), Stephen (MuleSoft-aligned), Colton (ATHR readout attendee). Three named Drive artefacts (FY27 PCNA AoTP deck 1KsNr..., $65k proposal 1RsOO..., ATHR 1t8Kq...) not yet in `raw/drive/slides/`.
- Orphan wikilinks introduced: (none new — [[entities/executives/michelle-rubio]] + [[entities/accounts/porsche-ag]] + [[entities/accounts/vw-sam]] exist)

## [2026-07-09] merge | wiki/entities/accounts/porsche-bank-ag.md

- Page type: account (Missing-accounts batch A — Tier 1 Austria Financial Services captive)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (only Slack channel index summary ingested; 16 opps not enumerated; zero contacts on record — stakeholders via activities/Slack), completeness PASS
- Sources consulted: 8 (Org62 account + hierarchy + contracts + contacts + activities + cases + Slack channel index)
- Review round: 1
- Key findings: Parent = Volkswagen Holding Österreich GmbH (per hierarchy.md Tier 2 — Sports/Luxury). Salzburg-seated, 1,441 employees, $1.14B revenue, Financial Services SIC 6159. **AFCC (Agentforce Contact Center) / Cloud Callcenter RFP arc 2026-04 → 2026-06** is the defining motion: bidder presentation 2026-05-19 → **Pilot Program accepted 2026-06-08 ("First AFCC customer in Austria")** → **RFP defeated 2026-06-16** for 4 documented reasons (product not GA, missing bi-directional MS Teams, unclear cost structure, pricing too high for non-GA). Escalation pivoted to POI Management push targeting Manfred Immitzer (customer-side POI/Board target). Underlying Marketing-Cloud/WhatsApp/SMS workstream running 2025-07-17 → 2026-07-01 (Case #473975747 Long Code SMS Marketing Cloud). Competitive backdrop: Genesys "most intensive" per Gennaro 2026-03-06; Vonage in evaluation; Bucher+Suter Cisco partner for Teams integration; Deloitte in play 2026-01-26 Genesys meeting.
- Orphan wikilinks introduced: (none new — [[entities/vendors/deloitte]] resolves to existing page)

## [2026-07-09] merge | wiki/entities/accounts/vw-south-africa.md

- Page type: account (Missing-accounts batch A — Tier 3 Emerging-Markets NSC/manufacturing)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (Slack channel index summaries only; 62 opps not enumerated; zero contacts on record; two distinct Slack channels ingested for one entity), completeness PASS
- Sources consulted: 9 (Org62 account + hierarchy + contracts + contacts + activities + cases + 2 Slack channel indexes)
- Review round: 1
- Key findings: Parent = Volkswagen Group Services GmbH (per hierarchy.md Tier 2 — Emerging markets). Centurion-seated 160 employees. **VWSA Group RFQ 2026-05-04** to Accenture + Deloitte + Cloudsmiths on 3 sections: **SAP + MuleSoft + Salesforce enhancements**. Scope objective: "Upgrade existing functionality for system efficiencies/accuracy, onboard Rental Department to fully utilize Salesforce Quote instead of manual quotes." Salesforce scoping this as **Revenue Cloud** (Mark Hoban 2026-05-08); customer champion **Michelle** initially wanted Sales Cloud framing → Cloudsmiths POV clarified difference; **Accenture disqualified 2026-05-18**. Parallel MuleSoft expansion (Ashnee Mathen "sell more Mule" 2026-05-22; 2vcores 2-year forecast Suzette Lloyd). Concurrent Tableau motion since 2025-02-18. Cross-references [[entities/vendors/sap]] + [[entities/vendors/deloitte]] + [[entities/vendors/mulesoft]] all cite this same RFQ. Modern 5-year SELA anchor contract `04172434` (2025-02-01 → 2030-01-31) matches Group SELA pattern.
- Orphan wikilinks introduced: (none new — [[entities/vendors/sap]], [[entities/vendors/mulesoft]], [[entities/vendors/deloitte]] all exist)

## [2026-07-09] merge | wiki/entities/accounts/vw-nutzfahrzeuge.md

- Page type: account (Missing-accounts batch A — Tier 2 DE Commercial Vehicles brand)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (only Main Account 001ed00000hQvWYAA0 fully consulted; two sibling records 0010M00001WI5zVQAT + 0010M00001WaWKDQA3 referenced via hierarchy.md but not per-record ingested; only one internal SIC-prep Slack channel; 3 opps not enumerated; zero contacts on record), completeness PASS
- Sources consulted: 8 (Org62 account + hierarchy + contracts + contacts + activities + cases + Slack channel index)
- Review round: 1
- Key findings: **Three Org62 records exist for VWN**: Main Account HQ (Eric Speisser owned, created 2025-09-12 — one of the youngest VW-family records), plus two Smart Mobility & Transport siblings owned by Anne Bögershausen. Hannover-seated Mecklenheidestraße 74. Defining active engagement is the **VWN Handelsworkshop (Dealer Workshop) CRM/Marketing motion** with Anny-Margrit Kurpiela-Geuther as customer counterpart (8 activity records 2026-05-06 → 2026-06-08, including 2026-06-01 "Abstimmung Inhalte VWN Handel CRM/Marketing WS 16.6." and 2026-06-08 "Digital Dialog + Handel CRM/Marketing" content-alignment events with Eric Speisser + Daniel Kral). Parallel Smart Mobility & Transport SIC at AWT Frankfurt 2026-05-20 (Ebene VIA Room 03, 10 Pax) prep-channel #awt-ffm-vw-nutzfahrzeuge-sic-137627 (Manuela Schellmann). Zero contracts + 37 CLVM outbound-dialer entries from Maurice Aaron Baumgart + Marvin Parbs / PATRICK BRUKER = high-volume demand-engine cadence on a young account.
- Orphan wikilinks introduced: (none new)

## [2026-07-09] merge | wiki/entities/accounts/seat.md

- Page type: account (Missing-accounts batch A — Tier 1 Spain OEM covering SEAT + CUPRA)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (no dedicated SEAT/CUPRA Slack channel; 160 opps not enumerated; 80-contact selection-only), completeness PASS
- Sources consulted: 7 (Org62 account + hierarchy + contracts + contacts + activities + cases)
- Review round: 1
- Key findings: Parent = Volkswagen Finance Luxemburg S.A. (per hierarchy.md Tier 2 — Sports/Luxury). Barcelona-seated 14,627 employees $932M revenue = a genuine mid-scale OEM unlike sibling [[entities/accounts/vw-group-espana]] (489 emp $8M rev). Andrea Escortell shared owner with VW Group España per hierarchy. Two 2026-Q2/Q3 defining motions: (1) **Salesforce + Informatica joint push** — 2026-06-15 Maintenance Renewal PowerCenter/Data Quality event → 2026-07-08 "Firma para procesar pedido" (order signature) events with [[entities/executives/juan-carlos-pallas|Juan Carlos Pallás]] / Oscar Ramos + Andrea Escortell; (2) **Agentforce World Tour Barcelona 2026-06-03** — SEAT SIC en AF Tour Barcelona with Elena Vigo + Andrea Escortell → 2026-07-06 "Un mes desde Agentforce WT BCN :: Optimizando vuestro canal de distribuidores" mass-email = Salesforce framing an Agentforce dealer-channel optimisation pipeline. Modern 5-year contract `05296170` Activated 2025-08-12 → 2030-08-11 (6-month offset from Group SELA 2030-01-31 pattern). 80 contacts include CEOs Wayne Griffiths (SEAT) + Isaac Partal Calvo (SEAT MÓ), CIO Miguel Angel Iglesias Lopez, CISO Alejandro Sanchez, CTO Sergio Giráldez Tamayo, plus 8+ @volkswagen-groupservices.com contacts (Marketing Cloud + Developer staffing surface from [[entities/accounts/vw-group-services]]). Sustained past-due invoice pattern 2024-06 → 2026-06-19 (invoice 35643919 165 days past-due) concurrent with active Informatica order signature = commercial-health flag.
- Orphan wikilinks introduced: (none — this fills the orphan wikilink introduced by vw-group-espana; [[entities/accounts/vw-group-espana]] cross-ref will now resolve)

## [2026-07-09] merge | wiki/entities/accounts/skoda-auto-cz.md

- Page type: account (Missing-accounts batch A — Tier 3 Czech HQ operating company)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (66 opps not enumerated; zero contacts on record; low-activity Slack channel ingested as index-only), completeness PASS
- Sources consulted: 8 (Org62 account + hierarchy + contracts + contacts + activities + cases + Slack channel index)
- Review round: 1
- Key findings: Parent = Volkswagen Finance Luxemburg S.A. (per hierarchy.md Tier 2 — Sports/Luxury). Mladá Boleslav-seated 33,696 employees $19.6B revenue. Owner = [[entities/executives/jakub-buzinkay|Jakub Buzinkay]] (Prague-based). **Distinct from [[entities/accounts/skoda-auto-de]]** (Škoda Auto Deutschland, DE distribution, Eric Speisser owned, VW AG parent). The **Škoda Agentforce Programme** at [[initiatives/skoda-agentforce]] (Octavius agent, 2026-06-18 Board Meeting Four-Acts deck with "805 hours regained per week" headline covering 140 CZ dealers) touches CZ HQ through parent-programme framing but sits commercially on the DE record. On-record CZ activity: **Škoda Slack Renewal June** (Jana Valova / Patricia Camova, Case 65084770 Closed-Resolved 2026-06-30); **Salesforce licensing for Škoda CAI** email chain (Jan Maly + Jan Žídek / Jakub Buzinkay 2026-06-11); **60-45 DIA Renewal Notification Journey** (Slavina Temelakieva 2026-04-27 → 2026-05-19); **Petr Petrýdes AE meeting 2026-06-12** (candidate = "Petr" credited in Board deck as "3 Buttons" workshop co-author per skoda-agentforce initiative); **OnePRM / Skoda Blocker / Skoda Licenses / Maps Learning events 2026-06-08 → 2026-06-15** (Philipp Reinhold Maag). Only 24-month contract `04350701` Activated 2025-07-01 → 2027-06-30 = outside the 5-year Group SELA 2030-01-31 envelope pattern.
- Orphan wikilinks introduced: (none — this fills the orphan wikilink noted in initiatives/one-crm and initiatives/skoda-agentforce cross-refs)

## [2026-07-09] merge | wiki/entities/accounts/vw-group-services.md

- Page type: account (Missing-accounts batch A — Tier 1 DE shared-services entity)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (3 Org62 IDs exist per hierarchy — 0010M00001SplkOQAR + 00130000008wzdhAAA parent + 001ed0000138SsYAAU MDM; only the operating record fully ingested; 42 opps not enumerated), completeness PASS
- Sources consulted: 7 (Org62 account + hierarchy + contracts + contacts + activities + cases)
- Review round: 1
- Key findings: Anne Bögershausen-owned Wolfsburg-seated shared-services GmbH. AnnualRevenue $254.1B + 502K employees are group-scope inheritance (matches skoda-de + vw-south-africa + vwn pattern). Defining evidence: **29-month recurring "Monthly Update / Salesforce & VWGS SCC" cadence** 2025-05-05 → 2027-08-02 (Vineet Bisht Marketing Cloud Lead Expert / Anne Bögershausen — explains anomalous LastActivityDate 2027-08-02). **VWGS = Salesforce Consulting Competence Center** — 58 principal-level contacts including Karin Haferkorn (SCC Principal), Dennis Kappei (Consulting Teamleitung), Andreas Maack (Chief Security Officer VW AG), Cornelius Menig (Head of Applications & Platforms VW AG), Jasper Kammeyer (Head of IT), Ralf Lehmann (Director IT), Wulf Welkerling (VWVG VDD-C Projekt CRM Wholesale). Substantial partner staffing: Capgemini (Frederic Faisst + 7 more), MHP, Reply, bosse-it.net. 42 opps at only $99k lifetime = confirms VWGS operates as staffing/services hub where deal dollars land on child brand accounts. Modern 5-year contract `04172473` Activated 2025-02-01 → 2030-01-31 matches Group SELA pattern; 47-month `03193659` ISV Partner Ops expiring 2026-07-25 = renewal urgency. Active motions 2026-Q2/Q3: MC-Advanced Next-Steps (Christian Schmidt / Daniel Kral); AI use cases VWGS Consulting (Dennis Kappei / Julia Schleussner); UK Austausch (Christian Schmidt / Anne Bögershausen — likely tied to vw-uk-d360 or vwfs-uk); Marketing Use Cases; Architecture (Christian Schmidt / Anne Bögershausen 2026-07-03); Affinity Loop und Anbindung zu Sales Force (2025-02-24 Wulf Welkerling kick-off).
- Orphan wikilinks introduced: (none new — [[entities/executives/anne-bogershausen]] still-orphan future exec page)

## [2026-07-09] merge | wiki/synthesis/vw-australia-sela-rollin.md

- Page type: synthesis (Synthesis batch A)
- Verifier verdicts: citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (vw-sela-amendment channel — July 2025 quarter-end amendment push — noted as adjacent SELA-ops context, not directly about VGA), completeness PASS
- Sources consulted: 11 (raw: 2 Slack files in volkswagen-global-renewal + 5 Org62 records + hierarchy + VGA contracts; wiki: vw-group-australia + ingrid-prowse)
- Review round: 1
- Key claims: Codifies the SELA roll-in playbook from the VW Group Australia Feb 2025 case — auto-renewal race resolved by Ryan Harris 30-day extension + Yuliya Siuld provisioning + [[entities/executives/ingrid-prowse|Ingrid Prowse]] account ownership. Attrition math ($854k quote ACV vs $968k standalone renewal = ~$100k delta). Sammi Pang confirmation "went around the globe to get sorted". Post-conversion VGA is on VW Global SELA. Prerequisites (SELA umbrella + willing NSC + MDM-clean account); Risks (rev-rec delay, NSC autonomy pushback, provisioning delay); VW Italia Dec 2024 renewal cited as counter-pattern (Q-09505654 outside SELA per Derek Byrne precedent 2025-01-28). Where else this could apply: VW Group Sales Middle East FZCO (232 opps, Ingrid Prowse-owned), VW Group Polska (52 opps, Mateusz Panawa-owned), VW South Africa (already on SELA-anchor contract 04172434 — inverse pattern candidate).
- Orphan wikilinks introduced: entities/accounts/vw-group-polska (new); entities/accounts/vw-group-sales-me was already flagged by ingrid-prowse.md — both remain candidates for future page creation

## [2026-07-09] merge | wiki/synthesis/diconium-partner-takeover-risk.md

- Page type: synthesis (Synthesis batch A)
- Verifier verdicts: citation PASS, contradiction PASS_WITH_FLAGS (soft internal wiki drift: skoda-agentforce.md § Partners in scope reads "Škoda owns Diconium" — this synthesis and diconium account page read "VW AG owns Diconium" per Org62 parent chain), coverage PASS_WITH_FLAGS (peripheral Diconium cases + CARIAD DDD RFP unrelated), completeness PASS
- Sources consulted: 13 (raw: 4 Slack files [skoda-af-proj thread + skoda-af-proj index + dxone-cariad-vw-staffing + diconium activities] + 1 Drive deck [vwg-salesforce-spread partnership update] + 3 Org62 records; wiki: 5 pages [accounts/diconium + vendors/diconium + executives/simeon-dimitrov + initiatives/agentforce-momentum-120 + initiatives/skoda-agentforce])
- Review round: 1
- Key claims: Codifies partner-takeover-risk thesis from Simeon Dimitrov's 2025-09-24 raw statement ("PS deliver phase 1 + partner takeover approach not working well for Agentforce... if not working, they point to product"). Historical pattern is asserted-not-reified in raw (Skoda customer sponsorship + shared-ownership, no earlier successful SF-Diconium handoff documented). Signals corrected in revision 1: previously claimed "post-2025-10-06 silence" but Diconium activity feed shows ongoing formal [[entities/executives/bojan-vlaski|Bojan Vlaski]] / Anne Bögershausen + Daniel Kral Škoda-DE + SEAT-DE monthly AE-meeting cadence 2026-06-10 → 2026-11-25 + 2026-06-17 Dreamforce Agendaslot event + 2026-05-06 AWT disco/abgleich. Diconium NOT named in 2026-05-08 VWG × SPREAD partnership deck L1-L6 governance (0 occurrences confirmed). Mitigations: FDE embed (Dimitrov Aim), M120 direct engagement, exec-level anchoring. Related opps where risk highest: Skoda AF, CARIAD DDD/DBA RFP + dx.one, VWFS UK M120 (Capgemini analogous pattern per 2026-06-11 "changed features + got stuck").
- Orphan wikilinks introduced: none (all wikilinks resolve to existing pages)

## [2026-07-09] merge | wiki/entities/accounts/vw-motorsport.md

- Page type: account (Missing-accounts batch A — Tier 3 DE race arm; stub with formal Coverage Gap section)
- Verifier verdicts: citation PASS, contradiction PASS_WITH_FLAGS (AnnualRevenue $283B on 184 employees is group-scope inheritance + Rating vs segmentation-tag inconsistency), coverage PASS_WITH_FLAGS (formal Coverage Gap declared — raw material near-empty: 0 contacts, 0 contracts, 0 cases, 0 activities in last 3 years, 1 opp at $0 lifetime, no Slack channel), completeness PASS (all mandatory sections present with substantive text explaining emptiness)
- Sources consulted: 7 (Org62 account + hierarchy + contracts + contacts + activities + cases + assets)
- Review round: 1
- Key findings: Owner Anne Bögershausen, parent VW AG. Functionally dormant Org62 record — LastActivityDate 2018-09-25 (7.75 years stale). Segmentation tags `# IT buyer function audience segmentation for Data Cloud_DE_Accounts` + `#IB50MCPGM` (Institutional Buyer 50 Marketing Cloud Priority Group Membership targeting flag) indicate record lives on Salesforce marketing-audience lists but has zero engagement. Distinct from Škoda Motorsport (which has active B2B Commerce history per [[entities/accounts/skoda-auto-de]]) and Bentley Motorsport function (Bob Martin COO Mulliner & Motorsport per [[entities/accounts/bentley-motors]]). Refresh trigger declared: any raw signal above bulk-audit level should re-ingest.
- Orphan wikilinks introduced: (none new)

## [2026-07-09] refresh | wiki/entities/accounts/vw-ag.md

- Trigger: Drive Phase 3 landed vwg-qbr-112025-schoenherr, vwg-sic-munich-20250616-wip, data-cloud-one-at-vwg-20260401, awt-fy27-automotive-after-sales-20260520, vwg-salesforce-spread-partnership-update-20260508, vw-aftersales-22-usecases-spread-20260203 — none previously consulted at the vw-ag page level.
- Coverage verdict (before revision): FAIL — six Phase 3 decks with material shape-changing content missing.
- Revised: yes.
- New sources added: 6 (drive/slides/vwg-qbr-112025-schoenherr, vwg-sic-munich-20250616-wip, data-cloud-one-at-vwg-20260401, awt-fy27-automotive-after-sales-20260520, vwg-salesforce-spread-partnership-update-20260508, vw-aftersales-22-usecases-spread-20260203).
- Verifier verdicts (after revision): citation PASS, contradiction PASS, coverage PASS, completeness PASS.
- Review round: 2.
- Key new claims added:
  - Group SELA position (FY26 QBR) table: AOV $75M renewal target (SELA VW 2030 + Porsche 2032), TAM $430M, SOW 16%, shelfware $20M (€13m SAM + $7m Porsche), $33.35M Flex Credit pools, Technology Spend $6Bn, Revenue €324.7Bn, 679K employees; FY27 attrition estimate $1.5M/$1.0M; FY27 growth $1-2M scaling to ~$13.5M by 2030.
  - SELA 3.0 strategy = convert €33M shelf into innovation budget via Flex Credits; Porsche = FY29 lighthouse; VWG estimates 3 years to full shelf utilisation.
  - Traffic Light dashboard 29 products, 55% at 0% consumption, 3 green (Auto Cloud RU 64.9%, EE 31.7%, SMS/MMS 21.9%).
  - Three-Year Roadmap 4 pillars (Customer Journey/Agentic, Marketing/DC Scaling, AutoCloud/Dealer, Integration/Multi-Agent).
  - SIC Munich June 16 2025 speaker roster (Milano, Wallner, Geutner, Jentsch, Stars, Imme, Stokes, Dhanalal, Tallapragada, Muehlbauer, Mack, Schönherr, Hentschke) + full VWG delegation.
  - Data Cloud Regional strategy (6 instances) formally documented 2026-04-01; VW DC PROD Org ID 00D06000001T1yQ (EU); Companion Org enumeration.
  - VW Group = Agentforce VISIONARY reference-customer (Stefanie Paetow quote) in FY27 AWT Automotive After Sales deck.
  - Automotive Cloud pricing: EE $350 / Unlimited $525 / Agentforce 1 Editions $750; Agentforce for Automotive add-on $150 USD/user/month.
  - SIC MUC July 10 2026 named as Phase 1 milestone in SPREAD partnership plan.

## [2026-07-09] refresh | wiki/overview.md

- Trigger: FY26 QBR figures + DC PROD Org ID + pricing card + Palantir competitive second-source available on downstream wiki pages after vw-ag refresh.
- Coverage verdict (before revision): FAIL — QBR headline figures, DC architecture, pricing card, and second-source Palantir citation absent from the top-of-stack synthesis.
- Revised: yes.
- New sources added: 1 (wiki/competitive/palantir-ontology-vs-sf-spread.md — surfaced as [^src-19]).
- Verifier verdicts (after revision): citation PASS (all raw traces via vw-ag.md and palantir-ontology-vs-sf-spread.md), contradiction PASS_WITH_FLAGS (existing 46-vs-48 page-count flag preserved), coverage PASS, completeness PASS.
- Review round: 2.
- Key new claims added:
  - New section "FY26 QBR financial anchors (Conny Schönherr, 2025-11-21)" carrying $75M AOV / $20M shelf / $33M Flex Credit / $430M TAM / SOW 16% + SELA 3.0 strategy + Porsche FY29 lighthouse + Traffic Light dashboard summary + Three-Year Roadmap pillars.
  - New paragraph "Data Cloud architecture (formally documented 2026-04-01)" with Regional-DC-6-instances + VW DC PROD 00D06000001T1yQ + Companion Org enumeration.
  - New paragraph "Automotive Cloud pricing card" + Agentforce VISIONARY reference-customer status.
  - Palantir positioning strengthened from single-source flag to two-source-confirmed with the 14+ year strategic partner statement.
  - SIC MUC July 10 2026 named as Phase 1 milestone anchoring VWG × SPREAD After Sales program.

## [2026-07-09] refresh | wiki/competitive/palantir-ontology-vs-sf-spread.md

- Trigger: Drive Phase 3 landed vw-aftersales-22-usecases-spread-20260203 (2026-02-03) with identical Palantir-neutralisation framing on Slides 4 and 5 — the second raw source needed to lift the "single raw source" flag.
- Coverage verdict (before revision): FAIL — earlier-dated second raw source with identical framing was missing.
- Revised: yes.
- New sources added: 2 (drive/slides/vw-aftersales-22-usecases-spread-20260203, drive/slides/awt-fy27-automotive-after-sales-20260520).
- Verifier verdicts (after revision): citation PASS, contradiction PASS, coverage PASS, completeness PASS.
- Review round: 1.
- Key new claims added:
  - Palantir competitive framing now two-source-confirmed (2026-02-03 + 2026-05-08), identical phrasing, both Christoph Jentsch-owned.
  - Salesforce framed as "strategic partner of Volkswagen Group for 14+ years" (2026-02-03 deck, Slide 4).
  - Scalable Commercials — Flex Credits, spin up all 22 use cases without buying separate software licenses (2026-02-03 deck).
  - Salesforce + SPREAD.ai already deployed "by all volume brands across all VWG regions" (2026-02-03 deck).
  - Framing risk reduced but not eliminated — still no customer-voice or Palantir-side confirmation in raw.
  - Removed the "only one raw source" open question that was in prior draft.

## [2026-07-09] refresh | wiki/entities/accounts/vwfs-ag.md

- Trigger: Drive Phase 3 landed vwg-sic-munich-20250616-wip (speaker roster) + vwg-salesforce-spread-partnership-update-20260508 (July 10 SIC MUC milestone) + newly-visible Fuchs authorship in fy27-vwfs-crm-architecture-20260714 drive_owner field.
- Coverage verdict (before revision): FAIL — SIC Munich June 16 2025 predecessor speaker roster missing; July 10 2026 SIC MUC governance date not linked to VWFS architecture readout timeline; tfuchs@salesforce.com deck ownership not surfaced.
- Revised: yes.
- New sources added: 2 (drive/slides/vwg-sic-munich-20250616-wip, drive/slides/vwg-salesforce-spread-partnership-update-20260508).
- Verifier verdicts (after revision): citation PASS, contradiction PASS, coverage PASS, completeness PASS.
- Review round: 3.
- Key new claims added:
  - 2026-05-08 partnership deck lists SIC MUC July 10 2026 as Phase 1 governance milestone.
  - 2026-07-10 upcoming SIC Munich linked to the historic 2025-06-16 predecessor SIC where the group-level speaker roster (Milano, Wallner, Geutner, Jentsch, Stars, Imme, Stokes, Dhanalal, Tallapragada, Muehlbauer, Mack, Schönherr, Hentschke) sat; Hauke Stars close-out quote "It's now on us to make it happen."
  - FY27 VWFS CRM Architecture deck ownership explicitly attributed to tfuchs@salesforce.com (drive_owner field).
- No contradictions surfaced against existing wiki content.

## [2026-07-09] fix | wiki/initiatives/skoda-agentforce.md

- Trigger: drift caught by synthesis batch — 'Škoda owns Diconium' contradicts Org62 parent chain (Diconium `0013y00001d0JKBAA2` → `001ed00000ixtlXAAQ` VW AG, not Škoda)
- Corrected to: 'VW AG owns Diconium; Škoda uses Diconium as SI'
- Meri Korhonen 2025-09-22 Slack verbatim ("they own Diconium") preserved but qualified as Salesforce-internal shorthand not reflecting Org62 corporate ownership
- Review round: 2
- Verifier verdicts (in-line after fix): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (existing flag preserved), completeness PASS
- New review flag added: "Drift fix 2026-07-09 § Partners in scope Diconium ownership corrected"

## [2026-07-09] merge | wiki/sources/slack-zc-skoda-uk.md

- Page type: source (source-summary batch — 7-source uncited-Slack-channel closure)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (raw/slack/channels/ZC-C0BF7USCSKA-Skoda-Uk/index.md)
- Review round: 1
- Top signal: ZC channel scaffold-only (4 messages, created 2026-07-01 by Jordan Scheier) — Škoda UK evaluation activity referenced in [[initiatives/skoda-agentforce]] Board deck ("The UK is evaluating it now") is NOT yet in this channel

## [2026-07-09] merge | wiki/sources/slack-acct-porsche-ms.md

- Page type: source (source-summary batch)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (raw/slack/channels/acct-porsche-ms/index.md)
- Review round: 1
- Top signal: Porsche DMS partner = **Keyloop**; top DMS vendors CDK and R&R; STAR industry data standard; BMW DMS-integration reference material available (slides 25-26 AUE UC Master deck)

## [2026-07-09] merge | wiki/sources/slack-marketing-vwg-porsche.md

- Page type: source (source-summary batch)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 2 (index.md + 2025-08-06-porsche-declines-earnings-call.md)
- Review round: 1
- Top signal: Confirmed Salesforce product mix at Porsche (Agentforce + Data Cloud + Service Cloud + Automotive Cloud + Marketing Cloud) via draft earnings-call script; Salesforce exec sponsor = **Thomas Plack**; Q2 FY26 earnings mention declined 2025-08-11, secured for Q4 FY26 (Jan 2026) with SELA win opp `006ed00000AEMxNAAX`; $4M deal expansion referenced Jan 2026

## [2026-07-09] merge | wiki/sources/slack-porsche-trial-fy26.md

- Page type: source (source-summary batch)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 2 (index.md + 2025-05-07-porsche-signature-trial-request.md)
- Review round: 1
- Top signal: **€38m TCV** Porsche VW-independent contract shape (rebuild of B2C/B2B Sales + Service + Data Cloud); as of 2025-05-07 not signed, "final stage"; **SAP bundled Signature-equivalent features into their license offer** forcing Salesforce to strip Signature; Ferrari €300k / 5-year Signature commercial precedent; ProS + **MHP** as SI partners; internal debate Ralf Meyer PRO trial vs Carmine Mancusi ANTI trial

## [2026-07-09] merge | wiki/sources/slack-porsche6-12channel.md

- Page type: source (source-summary batch)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (raw/slack/channels/porsche6-12channel/index.md)
- Review round: 1
- Top signal: PURE LOGISTICS — Porsche Experience Center Atlanta driving-experience event 2026-06-12 with XEDE external partners; zero deal-shape signal; only useful evidence is that Salesforce US team leverages PEC Atlanta for customer VIP programming

## [2026-07-09] merge | wiki/sources/slack-tab-porsche-exec-event-fy25.md

- Page type: source (source-summary batch)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (raw/slack/channels/tab-porsche-exec-event-fy25/index.md)
- Review round: 1
- Top signal: 2024-09-27 Tableau DATArace AI Edition event at PEC Hockenheim was NOT primarily a Porsche account event — cross-customer VIP program (BASF, Roche, Infineon-declined, Sartorius-declined, Freudenberg-declined) with Deloitte co-host and Agentforce mention on agenda; Lori Steele (President EMEA) cancelled last-minute; **Richard Hondrich** flagged as strategic customer contact (affiliation not clarified in raw); Thomas Plack participant cross-references marketing-vwg-porsche as Porsche exec sponsor

## [2026-07-09] merge | wiki/sources/slack-vw-sela-amendment.md

- Page type: source (source-summary batch)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (raw/slack/channels/vw-sela-amendment/index.md)
- Review round: 1
- Top signal: **VW SELA amendment lifecycle requires SOPS + DD + RevRec + Legal approvals** — 2-week/quarter-end window is process-hostile ("4 weeks as standard" per Christoph Moser); Einstein SKU add attempt on VW SELA 2025-07-31 quarter-end was **deleted from deal cart** (Yuliya Siuld 09:52) — Einstein deployment NOT landed in this cycle; Yuliya Siuld is a recurring SELA-provisioning actor across VW motions (also VW Australia Feb 2025 per [[synthesis/vw-australia-sela-rollin]])

## [2026-07-09] merge | wiki/comparisons/vwfs-de-vs-vwfs-uk.md

- Page type: comparison
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 14 (2 org62 accounts + 2 opp records + 5 slack + 5 drive slides)
- Review round: 1
- Top signal: **VWFS UK is the reference customer VWFS DE points at** — UK's ID&V case cost-per-case £3.79 → £0.78 + Momentum 120 graduation ~2026-04-22 (2 weeks before VW AG's 2026-05-06) sits within days of the FY27 VWFS CRM Architecture readout for SIC Munich 2026-07-10 (213 slides, Thomas Fuchs authored). DE motion is architecture (5 Moves a-e + R1-R4, keystone Move e "real-time D360 access at scale" open-must-validate-first); UK motion is production (DCAA £5.4M FCA fine + £21.5M redress, 100,000+ complaints, 6-agent Integrated Agentic Stack). Companion Org pattern (Move c) is the technical bridge to plumb.

## [2026-07-09] merge | wiki/comparisons/audi-de-vs-audi-us.md

- Page type: comparison
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 22 (2 org62 accounts + hierarchy + 5 opp records + activities + 2 contacts + 6 slack + 2 cross-entity contacts)
- Review round: 1
- Top signal: **Only one of the two records behaves like an "Audi" account.** Audi AG (DE) is Anne Bögershausen-owned single-brand OEM with 18 opps at $0.00 and pre-pipeline Agentforce Commerce + Meta integration + Field Service Success Guide + Andy Seitz Large Solution Architect ONE.CRM veto voice. Audi of America (US) is Michelle Rubio-owned "Audi of America"-named record operating as NAR catch-all — 455 opps at $38.4M lifetime, 419 contacts majority `@vw.com`/`@vwcredit.com` (not `@audi.com`), activity feed dominated by `VW RO`/`VW ITSM`/`VW PW Agent Work`. Eric Speisser + Daniel Kral + Jan Besten are the current cross-read node. Bentley/Bugatti/Lamborghini US-affiliation left as open question rather than asserted claim.

## [2026-07-09] merge | wiki/comparisons/skoda-de-vs-skoda-cz.md

- Page type: comparison
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 16 (2 org62 accounts + hierarchy + CZ contracts/contacts/activities/cases + 6 slack channels + 1 drive slide)
- Review round: 1
- Top signal: **Škoda splits across two Org62 records with different parents, owners, contract cadences, and Salesforce motions.** DE distributor (`0013y00001gVJEBAA4`, Eric Speisser, VW AG parent) carries the Agentforce project surface (Octavius agent, Marken-Vorstand demo 2025-09-18, Diconium partner-takeover risk, Board Meeting Four-Acts deck 2026-06-18). CZ HQ (`0013000001CAw7mAAD`, Jakub Buzinkay Prague-based, Volkswagen Finance Luxemburg S.A. parent) carries the only Activated contract on record — 24-month `04350701` 2025-07-01 → 2027-06-30 outside the Group SELA 60-month pattern (2030-01-31 terminations) — plus a 2026-Q2 licensing conversation on "Skoda CAI" (Cloud AI/Central AI scope unclear) with Petr Petrýdes + Jan Maly + Jan Žídek. 140 CZ dealers is the Board-deck reach base; UK is "evaluating it now"; AVME/Poland/Germany 2026/2027 forward-look. 2027-06-30 CZ terminus is a candidate Group-SELA roll-in per [[synthesis/vw-australia-sela-rollin]] precedent.

## [2026-07-09] merge | wiki/entities/executives/thomas-plack.md

- Page type: executive (recurring-execs batch)
- Verifier verdicts (in-line): citation PASS_WITH_FLAGS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 8 raw (marketing-vwg-porsche index + 2025-08-06-porsche-declines-earnings-call thread + tab-porsche-exec-event-fy25 + cariad-psa-negotiation + vw-agentforce + vw-aes + man-truck-bus activities + vwfs-stakeholder-overview sheet) + 6 wiki cross-refs
- Review round: 1
- Key claims: Salesforce exec sponsor at Porsche (Ilana Heimbring 2025-08-11 verbatim "The exec sponsor will be Thomas Plack"); named owner-attendee on 2026-07-23 MAN Executive SIC alongside Christoph Jentsch + Ilana Heimbring (customer-side Nicolaus Arntz); Salesforce-side sponsor for 3 of 4 VWFS AG Board Decision Makers per Claudia Garz 2025-06-12 sheet (Dahlheim CEO, Bandmann CSO Sales, Kretzberg CIO — plus Thomas Sutter interim IT + Petra Faeth PO); "richtig bock und momentum" MAN Agentforce line ([[entities/executives/hans-paulini|Hans Paulini]] 2025-02-10 quoting Plack); CARIAD PSA info-distribution counterpart 2024-01-16 (Thomas Stauber); 2024-09-27 PEC Hockenheim exec-event participant.
- Review flags: "Placko" nickname → Plack identification on #vw-aes 2024-01-23 is a soft inference (participants roster doesn't explicitly enumerate Plack). Formal Salesforce title/org unit not in raw. No first-person Plack Slack messages captured — his messaging content is not surfaced in raw across ingested channels.
- Orphan wikilinks introduced: none — all cross-refs (Ilana Heimbring, Alena Kretzberg, Hans Paulini, Christoph Jentsch, Anne Bögershausen, Thomas Fuchs, MAN Truck account) exist.

## [2026-07-09] merge | wiki/entities/executives/yuliya-siuld.md

- Page type: executive (recurring-execs batch)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 17 raw (vw-sela-amendment + volkswagen-global-renewal index + VW-Australia SELA-rollin thread + vw-sam-contracts + 15 case files spanning VW SAM, Porsche AG, VWFS UK, VW Australia, Audi of America, Škoda CZ, VW do Brasil, VW Group Polska/España/Italia/Sales ME, SEAT, MAN, Lamborghini, Ducati) + 4 wiki cross-refs
- Review round: 1
- Key claims: SOPS / SELA-provisioning operator across the entire VW Group case surface — 306 cases owned on VW SAM record + 15 Porsche AG + 4 VWFS UK + 3 each on VGA/Audi US/Škoda CZ/VW do Brasil + 2 each Polska/España/ME/Lamborghini/Ducati + 1 each SEAT/Italia/MAN = ~350 total case surface across 15 VW-family accounts; Owner on 4 VW SAM contracts (2 Activated 60-month 2025-02-01→2030-01-31 + 2 Terminated-With-Exception 2-month scaffolds); Feb 2025 VW Australia SELA-roll-in provisioning workflow lead (verbatim "auto-renew fires; SELA supersedes" instruction to Eric Speisser 2025-02-12); July 2025 quarter-end Einstein SKU deletion on VW SELA amendment; 2026-05-28 farewell "May 29 last day in SOPS team. Work with Emily and Ricardo in Dublin team on future deals. 'Volkswagen sela was really like my second son.'"
- Review flags: successors "Emily + Ricardo Dublin team" surnames/UIDs unresolved in raw; formal team-name (SOPS/Deal Desk/Renewal) not stated in raw.
- Orphan wikilinks introduced: none — all references (Ingrid Prowse, Anne Bögershausen, synthesis/vw-australia-sela-rollin, sources/slack-vw-sela-amendment, opportunities/vw-sam-renewal-81-sfa) exist.

## [2026-07-09] merge | wiki/entities/executives/bojan-vlaski.md

- Page type: executive (recurring-execs batch)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS, coverage PASS, completeness PASS
- Sources consulted: 4 raw (diconium-activities + diconium account json+md + man-truck-bus-contacts) + 4 wiki cross-refs
- Review round: 1
- Key claims: Diconium-side operational counterpart on the Salesforce × Diconium joint-cadence for Škoda-DE + SEAT-DE (Anne Bögershausen + Daniel Kral) + Trumpf Commerce (Florian Resch) + Häfele Commerce (Ghahreman/Santur/Eberhart); 29 activity-attribution rows on Diconium Org62 activity feed as "Who" (Diconium-side contact); 7-month monthly recurring "Diconium <> Salesforce Austausch Škoda DE & SEAT DE" AE-meeting cadence booked 2026-06-10 → 2026-11-25 (each date paired to Bögershausen + Kral); parallel 8-month "Salesforce Commerce // Trumpf // Diconium" cadence booked 2026-03-23 → 2026-10-05 (Florian Resch); 2026-06-17 "Abstimmng Škoda Auto Deutschland Agendaslot @Dreamforce" alignment.
- Review flags: Name-spelling drift "Bojan Vlaski" (no diacritic, Diconium activities) vs "Bojan Vlaški" (with š, MAN Truck contact @nttdata.com Client Partner) — same-person cross-affiliation OR distinct-person name collision, unresolved in raw. Provisional treatment: page focuses on Diconium-side operational surface only.
- Orphan wikilinks introduced: none — all references (entities/accounts/diconium, entities/vendors/diconium, synthesis/diconium-partner-takeover-risk, entities/executives/anne-bogershausen) exist.

## [2026-07-09] merge | wiki/entities/brands/audi.md

- Page type: brand (Brand batch A — first brand page in the wiki)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (#vw-agentforce channel referenced at frontmatter level only; not deeply mined at brand level), completeness PASS
- Sources consulted: 14 (2 Org62 accounts + hierarchy + 4 Slack channels + 1 thread + 5 wiki cross-refs [audi-ag + audi-of-america + anne-bogershausen + michelle-rubio + andreas-seitz + one-crm])
- Review round: 1
- Key claims: AUDI Aktiengesellschaft `001ed000014shrbAAA` MDM parent of [[entities/accounts/vw-group-italia]]; Audi AG (Anne Bögershausen, 18 opps $0 booked directly) + Audi of America (Michelle Rubio, 455 opps · $38.4M lifetime = NAR catch-all covering VW + Audi + VWCredit); 3 active brand-level workstreams — Audi Agentforce + Meta integration ([[entities/executives/christopher-emmerich|Christopher Emmerich]] master deck WIP, Conny Schoenherr's 4 Meta options, Andy Seitz 2025-07-15 critique "Data Cloud + Sales Workplace integration are big weaknesses"), Audi HQ Agentforce for Commerce demo 2025-11-03 (Oksana Koval + Reena Prabhakar + Gilbert Heise + Tim Walther), Field Service Success Guide 2026-06-16 (Bhanu Prasad); Andreas Seitz Large Solution Architect ONE.CRM parallel to Yiyi Tang (CARIAD).
- Orphan wikilinks introduced: none new — all wikilinks resolve to existing pages.

## [2026-07-09] merge | wiki/entities/brands/skoda.md

- Page type: brand (Brand batch A)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (sic-awt-ffm-skoda-119102 + skoda-sic-sf-january + skoda-agentforce-professional-services channels listed but not deeply mined at brand-level), completeness PASS
- Sources consulted: 16 (2 Org62 accounts + hierarchy + 6 Slack channels + 1 Drive slide deck + 6 wiki cross-refs [skoda-auto-de + skoda-auto-cz + skoda-agentforce + one-crm + slack-zc-skoda-uk])
- Review round: 1
- Key claims: Škoda Auto a.s. CZ HQ (Jakub Buzinkay, 66 opps · $4.02M, sole 24-month Activated contract `04350701` 2025-07-01 → 2027-06-30 = outside 5-year Group SELA envelope) + Škoda Auto Deutschland GmbH (Eric Speisser, VW-AG-parented, primary Agentforce programme channel). Contract-vs-programme mismatch: programme runs on DE record while sole Activated contract sits on CZ HQ. Board Meeting Four-Acts deck 2026-06-18 headlines "805 hours regained per week across the network / 140 Dealers in CZ / 1m Quote Creation (was 70m) / 85% Facing Time (up from 60%)"; "Petr developed these buttons himself during the workshop" = Petr Petrýdes candidate. Rollout roadmap "UK is evaluating it now; AVME, Poland and Germany launch in 2026/2027". Škoda UK Slack scaffold (Jordan Scheier 2026-07-01, 4 messages) content-empty. Diconium ownership corrected: VW AG owns Diconium per Org62 parent chain (not Škoda).
- Orphan wikilinks introduced: none new.

## [2026-07-09] merge | wiki/entities/brands/porsche.md

- Page type: brand (Brand batch A)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (€38m TCV VW-independent contract vs 84-month 2032-05-27 SELA cohort alignment not resolved in raw), coverage PASS_WITH_FLAGS (ZC-C08ULM3C813-Porsche-Bank-AG channel index-summary only; PCNA child Org62 record 00100000002CuDeAAK opps not queried; Porsche Retail Group + Porsche Konstruktionen not consolidated), completeness PASS
- Sources consulted: 18 (3 Org62 accounts + hierarchy + 7 Slack channels [including ZC-C08ULM3C813-Porsche-Bank-AG] + 1 Drive slide + 7 wiki cross-refs [porsche-ag + porsche-cars-na + porsche-bank-ag + slack-porsche-trial-fy26 + slack-marketing-vwg-porsche + slack-acct-porsche-ms + porsche-ag-renewal-2-sfa])
- Review round: 1
- Key claims: Porsche AG (Ilana Heimbring, 227 opps · $27.11M, six 84-month contracts terminating 2032-05-27) + PCNA (MDM shell 001ed000013BUJHAA4, 25 msgs on `#porsche-cars-north-america-fy27`) + Porsche Bank AG (Stefan Pravits, AFCC Pilot Program accepted 2026-06-08 → RFP defeated 2026-06-16 4 reasons); FY29 lighthouse per QBR 2025-11-21; $75M AOV renewal target combines VW 2030 + Porsche 2032; $20M shelfware including $7M Porsche; €38m TCV VW-independent contract (2025-05-07, Ralf Meyer / Christoph Jäntsch / Ilana Heimbring, ProS + MHP SI, SAP bundling Signature-equivalent features, Ferrari €300k / 5-year Signature precedent); Kenzie Duclos $65k proposal with VW SELA umbrella pricing to PCNA (Martin's 3-year renewal signed last year); MuleSoft on-site 2026-07-09 (Lars Pfeiffer); Genesys "most intensive" at Porsche Bank (Gennaro 2026-03-06).
- Orphan wikilinks introduced: entities/executives/ilana-heimbring (not yet created; candidate for future exec-page batch).

## [2026-07-09] merge | wiki/entities/brands/vw.md

- Page type: brand (Brand batch A — last of 4)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (VW China + VW Argentina + VW Aktiengesellschaft top MDM parent not consolidated; `#vw-agentforce` channel last-message 2026-02-27 = channel drift or ingestion cutoff; VW Nutzfahrzeuge sibling records 0010M00001WI5zVQAT + 0010M00001WaWKDQA3 per hierarchy.md not per-record pulled; VW Group Sales Middle East FZCO footprint not detailed), completeness PASS
- Sources consulted: 22 (hierarchy + 2 Slack channels + 3 Drive slides + 15 wiki cross-refs — vw-ag + 9 regional NSCs + vw-nutzfahrzeuge + vw-motorsport + vw-sam + 3 execs + one-crm + overview + synthesis-australia-sela-rollin)
- Review round: 1
- Key claims: VW volume brand distinct from VW Aktiengesellschaft top MDM parent and VW AG operating co / DACH group root. Regional footprint: DE HQ + 9 NSCs (US MDM + BR + MX + IT + IE + AU + ES + PL + ZA) + VWN commercial vehicles + VW Motorsport race arm. Group Customer Story slide (Sherwood-owned English master + DE variant) = "Agentforce VISIONARY" tag with Data Cloud + Marketing + Sales + Service + Agentforce + MuleSoft product mix; Stefanie Paetow quote "10 European markets rolled out in 2 years"; brand list Audi + Volkswagen + SEAT/CUPRA + ŠKODA. `#vw-brand` (Thomas Fuchs 2024-09-24, 8 msgs) dormant since 2024-09-26 = no sustained VW-volume-brand-only channel; `#vw-agentforce` (Hans Paulini 2025-02-10) = master Agentforce cadence covering the whole VW Group with 40 messages. VW Australia SELA roll-in playbook + VWSA Group RFQ 2026-05-04 (SAP + MuleSoft + Salesforce) + VW MX Data 360 onboarding + VWN Handelsworkshop CRM/Marketing 2026-Q2 = current active regional motions. FY26 QBR anchors reprised: $75M AOV, $20M shelfware, $33.35M Flex Credit, $430M TAM, SOW 16%, Technology Spend $6Bn, Revenue €324.7Bn, 679K employees.
- Orphan wikilinks introduced: entities/accounts/vw-aktiengesellschaft (referenced as top MDM parent; page not yet created — is it a page candidate or an MDM ghost?).

## [2026-07-09] merge | wiki/initiatives/porsche-38m-independent-trial.md

- Page type: initiative (new page — Porsche €38m TCV VW-independent contract initiative)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (TCV alignment across €38m 2025-05-07 vs $2.85M Closed Won opp `006ed00000AEMxNAAX` 2026-01-28 vs $4M expansion referenced Jan 2026 unresolved in raw — same soft conflict already documented on porsche-ag account + porsche brand pages), coverage PASS, completeness PASS
- Sources consulted: 12 (2 Slack channels [porsche-trial-fy26 + marketing-vwg-porsche each with index + one thread file = 4 raw slack files] + 1 Drive slide vwg-qbr-112025-schoenherr + 1 Org62 opp `006ed00000AEMxNAAX` json+md + 4 wiki cross-refs [slack-porsche-trial-fy26 + slack-marketing-vwg-porsche + porsche-ag + porsche brand + porsche-ag-renewal-2-sfa])
- Review round: 1
- Key claims: €38m TCV VW-independent contract at Porsche AG (Ralf Meyer 2025-05-07 08:34 channel-open on `#porsche-trial-fy26` C08RWKGLZSL, 7 msgs single-day); scope = rebuild of B2C/B2B Sales + Service + Data Cloud; deal status 2025-05-07 = "not signed, final stage" (Ralf Meyer rebuttal to Carmine Mancusi); compelling event contract start May 2025 + first price ramp review Jan 2026; SAP as competitive incumbent bundling Signature-equivalent features into their license offer (Christoph Jäntsch via Ralf Meyer 2025-05-07 09:45); ProS + MHP as SI partners (MHP = Porsche captive IT consulting); Signature trial ask escalated by Christoph Jäntsch + Ilana Heimbring to Ralf Meyer + Swen Obermann; Carmine Mancusi verbatim ANTI trial "This team needs to show us some willingness to monetise the service as opposed to continuously asking for investments"; Ferrari €300k / 5-year Signature (2024 non-SELA) precedent invoked by Carmine Mancusi as commercial model; DX.ONE stream named as Salesforce-side workstream Signature would support; MVP-before-public-reference gate (Ilana Heimbring 2025-08-11 "success story once there's an outcome, like an MVP or a market go live"); Porsche as net-new customer as of Aug 2025 (Ilana Heimbring "we have yet to establish any relationships outside of my own"); Salesforce exec sponsor at Porsche = Thomas Plack; Q4 FY26 SELA win opp `006ed00000AEMxNAAX` Closed Won 2026-01-28 at $2,847,287.64 (Type Add-On Business, Owner Ilana Heimbring); $4M deal expansion referenced by Sung Hyun Yoon 2026-01-28; FY29 lighthouse per QBR 2025-11-21 "Establish Porsche as a Lighthouse Customer - FY29"; $75M AOV combines SELA VW 2030 + Porsche 2032; $20M shelfware including $7M Porsche; TCV alignment across the multiple commercial anchors unresolved in raw.
- Review flags: TCV alignment (€38m TCV vs $2.85M Closed Won vs $4M expansion) unresolved in raw; first-2 country rollouts planned within 2025 (specific countries not named); Signature-trial resolution not captured in `#porsche-trial-fy26` thread.
- Orphan wikilinks introduced: none — all references (entities/accounts/porsche-ag, entities/accounts/vw-sam, entities/brands/porsche, entities/executives/ilana-heimbring, entities/executives/thomas-plack, entities/vendors/mhp, entities/vendors/sap, sources/slack-porsche-trial-fy26, sources/slack-marketing-vwg-porsche, opportunities/porsche-ag-renewal-2-sfa) exist.

## [2026-07-09] refresh | wiki/entities/accounts/porsche-ag.md

- Page type: account (refresh round 2 → added Active initiatives pointer + SELA-vs-independent duality note)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (SELA-vs-independent contract duality already documented in own § Contradictions section — retained), coverage PASS (adds new raw slack sources: porsche-trial-fy26/index.md + porsche-trial-fy26/2025-05-07-porsche-signature-trial-request.md + marketing-vwg-porsche/index.md), completeness PASS
- Sources added: raw/slack/channels/porsche-trial-fy26/index.md + raw/slack/channels/porsche-trial-fy26/2025-05-07-porsche-signature-trial-request.md + raw/slack/channels/marketing-vwg-porsche/index.md + wiki/initiatives/porsche-38m-independent-trial.md
- Review round: 1 → 2
- Key delta: (1) New "## Active initiatives" section between Active opportunities and Key contacts, pointing at [[initiatives/porsche-38m-independent-trial]] with SI partners (ProS + MHP) + competitive framing (SAP bundle) + timeline anchors (contract start May 2025 + Jan 2026 price ramp review); (2) explicit SELA-vs-independent contract duality framing noting Porsche's coexisting identities — a Porsche-native SELA cohort terminating 2032-05-27 (six 84-month contracts) versus the VW-independent contract framing on `#porsche-trial-fy26`; (3) added footnote src-13 pointing at the new initiative page; (4) frontmatter refresh review_flag entry documenting the addition.
- Review flags: TCV alignment between €38m TCV characterization and $2.85M Closed Won opp `006ed00000AEMxNAAX` remains unresolved in raw (existing brand-page and initiative-page flag now mirrored on the account page).
- Orphan wikilinks introduced: none — [[initiatives/porsche-38m-independent-trial]] now exists.

## [2026-07-09] refresh | wiki/entities/brands/porsche.md

- Page type: brand (refresh round 2 → § Salesforce relationship at brand level updated to point at new initiative page)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (retained pre-existing €38m TCV vs 2032-05-27 SELA cohort alignment flag; page now cleanly delegates the initiative-scope material to the new dedicated initiative page), coverage PASS_WITH_FLAGS (retained pre-existing ZC-C08ULM3C813-Porsche-Bank-AG + PCNA child + Porsche Retail Group flags), completeness PASS
- Sources added: wiki/initiatives/porsche-38m-independent-trial.md
- Review round: 1 → 2
- Key delta: (1) § Salesforce relationship at brand level "Independent vs. group-SELA duality" paragraph now explicitly links to [[initiatives/porsche-38m-independent-trial]] and reiterates the deal-shape summary (May 2025 contract start + Jan 2026 price ramp review + ProS + MHP SI + SAP bundle + TCV-alignment unresolved between €38m 2025-05-07 and $2,847,287.64 Closed Won 2026-01-28 on opp `006ed00000AEMxNAAX`); (2) added footnote src-13 pointing at the new initiative page + its underlying raw sources; (3) frontmatter refresh review_flag entry documenting the refresh; (4) prior orphan-wikilink entries/executives/ilana-heimbring flag resolved (page now exists after prior exec-page batch).
- Orphan wikilinks introduced: none — [[initiatives/porsche-38m-independent-trial]] now exists.

## [2026-07-09] merge | wiki/questions/move-e-real-time-d360-at-scale.md

- Page type: question (Open-questions batch A — 1 of 5)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 6 (3 Drive slides — Strategic Frame v1 + FY27 CRM Architecture 20260714 + Data Cloud One at VWG 20260401; 1 partnership deck implicit — VWG × SPREAD partnership update 20260508 + Consumption deck; 2 wiki pages — capabilities/agentic-enterprise-vwfs + timelines/vwfs-architecture-evolution)
- Review round: 1
- Key claims: Move (e) framed verbatim on Slide 13 "Real-time D360 access · ? — Keystone capability for agentic UI composition. Open question — must be validated first"; R1 on Slide 15 "OPEN · must validate first"; Data Cloud One + Regional 6-instance (NAR/LATAM/APAC/EU/Africa & ME/China) is CHOSEN VWG architecture per 2026-04-01 deck; FY27 CRM Architecture readout (2026-07-14) uses Data Cloud One in target but does not resolve Move (e); 2026-07-10 SIC MUC is Phase 1 anchoring event. Three candidate answers (Companion Org defers-not-resolves / Data Cloud One IS the answer / still fundamentally open); default reading is candidate (c) — R1 remains OPEN as of 2026-07-09.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/questions/petra-feath-vs-faeth-spelling.md

- Page type: question (Open-questions batch A — 2 of 5)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 6 (3 Drive slide decks with "Feath" spelling — vwfs-service-pov-get-to-know-20250519 + vwfs-success-metrics-bv-interview-outcomes-20250523 + vwfs-x-salesforce-sic-feedback-wip-20260602; 3 internal sources with "Faeth" spelling — internal-vwfs-service-sf-team-rr + vwfs-stakeholder-overview-communication + org62/contacts/vwfs-ag-contacts)
- Review round: 1
- Key claims: 9 total hits split 6 "Feath" (all customer-welcome slides on 3 decks — same 4-name Salesforce team roster reused) / 3 "Faeth" (Org62 contact `0033y00002PpEy0AAF` with email `petra.iris.faeth@vwfs.com`, internal Salesforce R&R deck, VWFS stakeholder sheet). Working assumption: "Faeth" authoritative — Org62 email is strongest disambiguator; Petra is "Global Product Owner Salesforce Development" · Sponsor "Thomas / Jon" · Sentiment G "Positive but frustrated due to low deliveries and adoption".
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/questions/bojan-vlaski-diconium-vs-ntt-data.md

- Page type: question (Open-questions batch A — 3 of 5)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (raw/org62/contacts/diconium-contacts.md not consulted — would surface a definitive @diconium.com email and could resolve by itself; flagged material-miss but not blocking since this is a question page), completeness PASS
- Sources consulted: 7 (2 Org62 raw — diconium-activities.md + man-truck-bus-contacts.md; 5 wiki pages — bojan-vlaski exec + diconium account + diconium vendor + man-truck + diconium-partner-takeover-risk synthesis)
- Review round: 1
- Key claims: 29 Diconium-activity attribution rows for "Bojan Vlaski" (no diacritic) 2025-09-09 → 2026-11-25 covering Škoda-DE + SEAT-DE + Trumpf + Häfele cadences vs 1 MAN Truck contact row for "Bojan Vlaški" (with š diacritic) title "Client Partner" email `bojan.vlaski@nttdata.com`. Candidate answers: (a) same person cross-affiliation — strongly favoured on same country + title-shape consistency + wiki-precedent for spelling drift; (b) two distinct people — rejected as low-probability; (c) hygiene issue where NTT Data record is stale prior-employer trace — sub-case of (a). What resolves: LinkedIn / diconium-contacts.md consult / ask at next Diconium sync 2026-07-08 or 2026-08-05.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/questions/andrew-kirby-vs-kirkby-vwfs-uk.md

- Page type: question (Open-questions batch A — 4 of 5)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 8 (4 raw — vwfs-uk-contacts + vwfs-uk-activities + DCAA scandal thread + m120 FDE channel index; 4 wiki — vwfs-uk account + m120 initiative + vwfs-de-vs-vwfs-uk comparison + lucy-trott exec)
- Review round: 1
- Key claims: ~19 total hits split ~17 "Kirkby" (3 Org62 contact records L103/L117/L119 with emails `andrew.kirkby@vwfs.co.uk` OR `@vwfs.com`, 10+ Org62 activity rows 2025-08-28 → 2026-07-14, 1 Lucy Trott DCAA thread verbatim quote) / 2 "Kirby" (only in `#m120-volkswagen-agentforce-fde` Slack channel index L48/L49 by Lindsay Murdoch 2026-06-15/16). Strongly favoured (a): same person, "Kirkby" authoritative, "Kirby" is Salesforce-FDE-side informal Slack drift — possibly phonetic (Kirkby often has silent middle-k when spoken). VWFS UK M120 ID&V architecture sign-off gate; personal outreach blocked mid-2026; escalation via Dan James.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/questions/bentley-bugatti-lamborghini-us-brand-affiliation.md

- Page type: question (Open-questions batch A — 5 of 5)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS_WITH_FLAGS ([[entities/accounts/bentley-motors]] is an orphan wikilink — no bentley*.md exists under wiki/entities/accounts/. Flagged inline as "not currently in wiki")
- Sources consulted: 13 (7 raw — hierarchy.md + 3 pairs of Org62 accounts .json+.md for VW GoA + Bugatti + Lamborghini; 4 wiki — vw-group-of-america + bugatti + lamborghini + audi-de-vs-audi-us comparison; index cross-refs)
- Review round: 1
- Key claims: Direct grep of `raw/org62/accounts/vw-group-of-america.{json,md}` returns zero mention of Bentley/Bugatti/Lamborghini. Hierarchy.md L114-117 places all three under European parents (Bentley → VW Finance Luxemburg GB; Lamborghini → VW Finance Luxemburg IT; Bugatti → Rimac Group FR). VW GoA MDM shell is 0 opps / 0 contacts / 0 activities. Candidate answers: (a) note was wrong / (b) historically true pre-Rimac Group transfer / (c) US operation split off to different Org62 record not yet ingested — with Porsche Cars North America (`001ed000013BUJHAA4`) as documented precedent. What resolves: Michelle Rubio DM or Org62 SOQL `Name LIKE 'Bentley%' AND BillingCountry='US'`.
- Orphan wikilinks introduced: entities/accounts/bentley-motors (declared in-page as "not currently in wiki"; candidate for a future missing-accounts batch).

## [2026-07-09] merge | wiki/entities/executives/patrick-schreier.md

- Page type: executive (Missing-execs batch C — Salesforce Renewals AE, VW Group DACH)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS, completeness PASS
- Sources consulted: 13 (5 Opp records + VW SAM contracts + VW SAM activities + VW AG activities + hierarchy.md)
- Review round: 1
- Key claims: Renewals-focused AE covering ~$57.56M open Renewal pipeline (VW SAM Renewal 81 SFA $52.52M + Porsche AG Renewal 2 SFA $4.80M + VW Group Italia Renewal 144 Call Center $149.7k + VW AG Renewal 2 MC ExactTarget $99k) plus 1 Won (VW Group Italia 2025 $128.7k) = 5 total Renewal Opps. Owns 6 Activated contracts on VW SAM 2025-12-15 → 2026-01-28 (five 12-month + one 36-month) — short-cycle renewal envelope layered on top of Yuliya Siuld's 60-month 2030-01-31 SELA cohort. Split-ownership pattern confirmed 4-of-4 records: account owner ≠ opp owner (Anne Bögershausen VW SAM + VW AG + VW Group Italia; Ilana Heimbring Porsche AG). VW Group Italia YoY renewal cadence 2025 Won $128.7k → 2026 pending $149.7k = ~16% uplift. No first-person Slack messages / Slack UID unresolved. 2026-06-03 VW SAM Task "Create red account and link to the opportunity" Not Started. 2026-07-04 VW AG Task "Renewal Notification | 90-day Journey Notification" Completed (AP Post-office box Who).
- Orphan wikilinks introduced: none (all cross-references resolve to existing pages: entities/executives/anne-bogershausen, entities/executives/ilana-heimbring, entities/executives/yuliya-siuld, entities/accounts/vw-sam, entities/accounts/porsche-ag, entities/accounts/vw-group-italia, entities/accounts/vw-ag, opportunities/vw-sam-renewal-81-sfa, opportunities/porsche-ag-renewal-2-sfa)

## [2026-07-09] merge | wiki/entities/executives/andrea-escortell.md

- Page type: executive (Missing-execs batch C — Salesforce AE VW Group Iberia)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS, completeness PASS
- Sources consulted: 11 (2 pairs Org62 accounts .json+.md for VW Group España + SEAT + hierarchy.md + 2 pairs Opps + 2 activities files)
- Review round: 1
- Key claims: Salesforce AE covering VW Group Iberia territory (Org62 Owner on VW Group España Distribución `0013000000rnfANAAY` + Seat S.A. `00130000002xJ5UAAU`, both Barcelona-seated, both under Volkswagen Finance Luxemburg S.A. parent). Territory-descriptor "Directora de cuentas VW Spain" surfaces on recurring bi-weekly cadence event subject 20+ instances 2026-06-01 → 2027-02-22 (Francisco Morer Liñan internal driver / Mario Lopez customer-side counterpart). Owns 2 SEAT Opps: `006ed00000Mp3VSAAZ` Net_Zero_DBP_Seat/Cupra ($210k open Stage 02 Close 2027-04-29) + `0063y00001AwSiqAAF` MC_ES_NB_SEAT_LOYALTY ($204k Dead-Lost 2026-03-11). Two parallel motions 2026-Q2: (a) VW Group España CH2/Hyperforce migration + Professional Services (Pedro Velasco); (b) SEAT Salesforce+Informatica joint order signature 2026-07-08 (Firma para procesar pedido, Juan Carlos Pallás customer-side, Andrea + Oscar Ramos Salesforce-side). Split-ownership pattern with Veronica Manuel Salvador (Renewal 198 Call Center specialist) and Oscar Ramos (Informatica specialist).
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/entities/executives/jakub-buzinkay.md

- Page type: executive (Missing-execs batch C — Salesforce AE Škoda Auto a.s. Czech HQ)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (SE vs AE role designation soft conflict), coverage PASS_WITH_FLAGS, completeness PASS
- Sources consulted: 7 (Škoda Auto a.s. Org62 account pair + hierarchy.md + activities + 2 Slack channel indexes + 1 Slack thread)
- Review round: 1
- Key claims: Salesforce AE owner on Škoda Auto a.s. `0013000001CAw7mAAD` (CZ HQ Mladá Boleslav, 33,696 employees, $19.6B revenue, Rating Tier 3, only Activated contract 24-month `04350701` outside Group SELA). Slack UID `U031WSW0HT8`. Sole substantive first-person Slack signal is `#volkswagen-sela-split-49139059` 2026-02-17 correction: 65/35 CZ/VWG SELA split ratio (down from an initial 80/20 mis-share by Bellamkonda) for Jan 26 orders # 32419406 + # 32419420 — an FY26 SELA-split governance signal quantifying CZ vs Main VWG AE credit allocation. 2026-06 activity ledger: 5 Buzinkay-owned rows covering Salesforce licensing for Škoda CAI email chain (Jan Maly + Jan Žídek 2026-06-11) + Partner Engagement 2026-06-08 + AE meeting Petr Petrýdes 2026-06-12 + Status Check Call: Connect Jan Maly 2026-06-19 (all Completed). No first-person Opp Owner attribution on the 66 lifetime Škoda opps.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/entities/executives/juan-carlos-pallas.md

- Page type: executive (Missing-execs batch C — customer signatory Salesforce + Informatica joint order at SEAT)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (customer-vs-Informatica-vendor employer ambiguity), coverage PASS_WITH_FLAGS, completeness PASS
- Sources consulted: 4 (SEAT activity ledger + SEAT account pair + hierarchy.md)
- Review round: 1
- Key claims: Coverage-sparse stub. Appears only as "Who" on 3 AE-meeting Event rows on `raw/org62/activities/seat-activities.md`, all on Salesforce + Informatica joint motion at SEAT: 2026-06-15 Maintenance Renewal PowerCenter/Data Quality (Owner Andrea Escortell) + 2026-07-08 "Firma para procesar pedido" (2× rows, Owners Oscar Ramos + Andrea Escortell). No contact record on SEAT contact table (80 contacts, none match "Pallás"). No Slack UID, no first-person messages. Customer-vs-Informatica-vendor employer ambiguity acknowledged: user prompt directive = customer-side SEAT signatory; seat.md wiki L134 = "Salesforce team on account: **Juan Carlos Pallás** (Informatica lead)" — both readings compatible with raw, neither confirmed by first-person source. Filed as Open Question.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/entities/executives/eric-catron.md

- Page type: executive (Missing-execs batch C — Salesforce Core SE NAR VW/Audi FY23-era)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (current-day role unverified — channel dormant), coverage PASS_WITH_FLAGS, completeness PASS
- Sources consulted: 1 (`raw/slack/channels/account-vw-fy23/index.md`)
- Review round: 1
- Key claims: Coverage-sparse stub. Sole raw source is `#account-vw-fy23` channel index (channel_id `C01M33W2ZPZ`, salesforce-internal.slack.com). Slack UID `U01GLPS88TT`. Role attribution "Core SE: [[entities/executives/eric-catron|Eric Catron]]" via channel purpose-line roster. Channel dormant post-2023-12-15 (Seller Experience archival prompt). Current-day (2026-07-09) NAR VW/Audi Core SE role not verified in raw — grep of raw/slack/ for "Catron" returns only account-vw-fy23 hits. No first-person messages captured. Team roster (per channel purpose L44): Core AD Michelle Rubio, CSM Doug Jones, Core SE Eric Catron, ECS Morgan Barduson, BDR Grant Viola, CSG Jack Seigler, Service SE Bill Frazier, Service AE Dana Cubeta, Platform AE Steve Sokol, Marketing AE Melissa Ghazal, Marketing SE Adam Feder.
- Orphan wikilinks introduced: none (cross-references resolve to entities/executives/michelle-rubio + entities/accounts/vw-group-of-america + entities/accounts/audi-of-america; sources/slack-acct-porsche-ms exists).

## [2026-07-09] merge | wiki/sources/drive-vwfs-c360-use-case-examples.md

- Page type: source (Source-summary batch B — Drive doc)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/docs/vwfs-c360-use-case-examples.md`)
- Review round: 1
- Key claims: Thomas Fuchs-authored Google Doc 2025-05-05 laying out 5 C360 use cases for VWFS Germany Service Operations (Up/Cross-Selling, Telematics Mileage Guardian, Accident & F/L Customer Handling, VWG/Brand Marketing ↔ VWFS Sync, Customer Interaction History). All 5 UCs point to Salesforce Data Cloud as the enabling layer. UC1 states Data Cloud "already implemented for FY1"; UC4 preferred method "SF Data Cloud"; UC5 requires "connection of VWFS GER Service Ops to the data cloud".
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/executives/thomas-fuchs + entities/brands/vw + initiatives/vwfs-transformation).

## [2026-07-09] merge | wiki/sources/drive-vwfs-current-crm-challenges-improvements.md

- Page type: source (Source-summary batch B — Drive doc)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/docs/vwfs-current-crm-challenges-improvements.md`)
- Review round: 1
- Key claims: Claudia Garz-authored synthesis of May 6-8 2025 VWFS discovery interviews + system demos. 8-theme structure. Names legacy system inventory (eKV, BCA, Firmenanalyse, ZGP/SAP, ueKa, Leasis/Miles, FILO, Contract Management) + 12-week onboarding + Sambi-to-CRM day-latency batch process. Future-state uncertainty on CRM captured verbatim: "new operational system (Miles) which will handle most transactional processes ('dunkel processing'). The role of the CRM in this future landscape is still being debated".
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/vendors/sap + initiatives/vwfs-transformation + sources/drive-vwfs-pov-solution-design + sources/drive-2025-vw-fs-capability-map-service-operations + competitive/sap-vs-salesforce-vwfs-markt-de).

## [2026-07-09] merge | wiki/sources/drive-vwfs-pov-demo-preparations.md

- Page type: source (Source-summary batch B — Drive doc)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/docs/vwfs-pov-demo-preparations.md`)
- Review round: 1
- Key claims: Florian Wentzel-authored 145k-byte functional Demo Preparation doc versioned 0.1 (2025-05-21) → 0.10 (2025-08-25) for VWFS Service PoV. 7 Epics enumerated (E01 Enablement + E02 Basic Case Handling 3 tiers + E03 Direct Customer B2C + E04 Enterprise Customer VW B2B + E05 Business Customer B2B + E06 Complaint Management + Damage Reports + E07 Enhancements + Roadshow). Demo instance URL volkswagenfinancialservicesag2.lightning.force.com. Named demo feedback voices Andi + Nadeen on E1-US-01.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + sources/drive-vwfs-pov-solution-design + sources/drive-vwfs-pov-user-story-tracker + sources/drive-vwfs-pov-weekly-sprint-demo-master).

## [2026-07-09] merge | wiki/sources/drive-vwfs-pov-solution-design.md

- Page type: source (Source-summary batch B — Drive doc, priority anchor)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/docs/vwfs-pov-solution-design.md`)
- Review round: 1
- Key claims: Florian Wentzel-authored 245k-byte Solution Design master versioned 0.1 (2025-05-07) → 0.14 (2025-06-25) for VWFS Service PoV. Explicit competitive statement verbatim: "replace the existing SAP CRM Installations for different business units at VWFS". Named external system SAP S/4 HANA Demo Org (my405263.s4hana.cloud.sap) with credentials + SE Contact Jonathan Flach. 3-tier delivery model (No Code / Low Code / Pro Code). Case hierarchy pattern (Service-Order Main + Service-Requests 1 + 2 Child). Elements Cloud Q9 workspace URL.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/vendors/sap + sources/drive-vwfs-pov-demo-preparations + sources/drive-vwfs-pov-user-story-tracker + sources/drive-vwfs-current-crm-challenges-improvements).

## [2026-07-09] merge | wiki/sources/drive-vwfs-pov-user-story-tracker.md

- Page type: source (Source-summary batch B — Drive sheet)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (rows 51-175 not extracted), completeness PASS
- Sources consulted: 1 (`raw/drive/sheets/vwfs-pov-user-story-tracker.md`)
- Review round: 1
- Key claims: Florian Wentzel-owned 175-row backlog Google Sheet with per-implementer confidence scoring (1-5). PoV delivery team named: Pavan Kumar Kondur + Manas Maity + Vishal Gaddi + Sriranga Shekar Modala. Account & Contact + Case Activities + Email Templates + Case Classification approaches all rated 5-of-5. Lookup Table 3-Level Classification + Business Rule Engine rated 3-4. Einstein Case Classification 4-of-5 with "Alternative: LLM-based API-called Agent" fallback documented.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + sources/drive-vwfs-pov-solution-design + sources/drive-vwfs-pov-demo-preparations).

## [2026-07-09] merge | wiki/sources/drive-vwfs-leasing-service-pov-timeline-20250308.md

- Page type: source (Source-summary batch B — Drive slides, priority anchor)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/slides/vwfs-leasing-service-pov-timeline-20250308.md`)
- Review round: 1
- Key claims: Nadeen Khalid-owned 4-slide deck marking 2025-03-08 kick-off for VWFS Leasing Service Cloud PoV. Signed SOW reference SOW04278729 — canonical contract ID. 4-Fachbereich interview scope (Firmenkunden + Leasing/Finanzierung/Großkunden + Direktbank + Marketing/Vertrieb). Named Abteilungsleiter Uphoff + Hattesohl for exec-open slot. 0$ Contract front-load = Salesforce-funded PoV. Team availability commitments per role.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/accounts/vw-leasing-de + sources/drive-2025-vw-fs-capability-map-service-operations + sources/drive-vwfs-pov-weekly-sprint-demo-master).

## [2026-07-09] merge | wiki/sources/drive-vwfs-pov-weekly-sprint-demo-master.md

- Page type: source (Source-summary batch B — Drive slides, priority anchor)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (only slides 1-7 of 59 fully scanned in raw extract), completeness PASS
- Sources consulted: 1 (`raw/drive/slides/vwfs-pov-weekly-sprint-demo-master.md`)
- Review round: 1
- Key claims: Nadeen Khalid-owned 59-slide MASTER weekly sprint-demo deck for VWFS Service PoV. Slide 2 names full Salesforce PoV team: Pavan Kumar Konduru + Balwant Verma + Claudia Garz (Director Solution Consulting) + Nadeen Khalid (EDM) + Andreas Kunze (Experience Architect) + Christian Horbach (Engagement Manager) + Florian Wentzel (Solution Architect). 4-Customer-Journey agenda (Privatkunden + Geschäftskunden + Netto Schaden & Beschwerde Mgt + Handelspartner). PoV vs PoC vs Prototype framing on slide 4. Customer quote captured: "Vielleicht müssen wir auch mal den ein oder anderen Prozess bei uns ändern".
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/sources/drive-vwas-af-uc-2026-04-13-gemini-notes-de.md

- Page type: source (Source-summary batch B — Drive doc, Gemini meeting notes)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/docs/vwas-af-uc-2026-04-13-gemini-notes-de.md`)
- Review round: 1
- Key claims: Markus Müller-owned Gemini-generated meeting notes for 2026-04-13 coaching session between Jonathan Flach + Markus Müller on Cursor-based agent development for VW After Sales demo (Laura Becker + Recharge Go). Policy line captured verbatim: Claude Code / Cursor with anthropic backing officially NOT permitted in VW customer sandboxes; only Gemini via web UI. Recommended architecture: Salesforce Prompt Templates for text generation + Apex for DML only. Custom Lightning Types for AF response UI. Müller preference: Claude Code more usable than Gemini Code Assist.
- Orphan wikilinks introduced: none (targets entities/brands/vw).

## [2026-07-09] merge | wiki/sources/drive-vwfs-frequently-asked-questions.md

- Page type: source (Source-summary batch B — Drive doc, public FAQ)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/docs/vwfs-frequently-asked-questions.md`)
- Review round: 1
- Key claims: Public-facing US Retail-customer FAQ from vwcredit.com archived to Drive by Jonathan Flach. Documents 2025-05-01 Wells Fargo split (new financings shift to "Volkswagen Retail Finance powered by Wells Fargo"; VWFS keeps leasing + pre-May-2025 financings). VWFS US corporate structure surfaced (VWFS Protection Services Inc obligor Reston VA; Safe-Guard Products International LLC administrator; VW Credit Leasing Ltd Minneapolis MN registered). Contact center +1 800-428-4034. Copyright © 2025 Volkswagen of America Inc.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/accounts/vw-group-of-america).

## [2026-07-09] merge | wiki/sources/drive-vwfs-knowledge-base-compilation.md

- Page type: source (Source-summary batch B — Drive doc, comprehensive knowledge base)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/docs/vwfs-knowledge-base-compilation.md`)
- Review round: 1
- Key claims: Jonathan Flach-owned 124k-byte comprehensive knowledge-base doc on VWFS structure + subsidiaries + digital platforms + financing solutions + Verimi + restructuring effective 2024-07-01. Confirms 2024-07-01 restructuring (new VWFS AG = European financial holding under ECB supervision; original entity renamed VWFS Overseas AG for non-European). VW Bank + VW Leasing consolidated within European holding; VW Leasing becomes subsidiary of VW Bank. 17 European markets directly managed. Verimi digital-identity integration reduces signature count from 14 to potentially 1. ClassicCredit + AutoCredit product mix.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/accounts/vw-ag + entities/accounts/vw-leasing-de + entities/brands/vw + initiatives/vwfs-transformation + sources/drive-vwfs-rfi-solution-proposal-loyalty-20221213).

## [2026-07-09] merge | wiki/sources/drive-vwfs-new-crm-key-success-factors.md

- Page type: source (Source-summary batch B — Drive doc)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/docs/vwfs-new-crm-key-success-factors.md`)
- Review round: 1
- Key claims: Thomas Fuchs-authored 3.7k Key Success Factors doc distilling VWFS discovery output into 7 KSFs (User Adoption, Integration + Data Consolidation, Automation + Efficiency, Process Optimization, Data Quality + Consistency, Performance + Stability, Change Management). Legacy systems named in KSF 2: SAP + ueKa + Miles. KSF 1 confirms "low acceptance of the current CRM system among some user groups, especially in some sales-related roles". Closing framing: "The success of a CRM implementation at VWFS depends on how well these factors are considered and executed".
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/vendors/sap + initiatives/vwfs-transformation + sources/drive-vwfs-current-crm-challenges-improvements + entities/executives/thomas-fuchs).

## [2026-07-09] merge | wiki/sources/drive-2025-vw-fs-capability-map-service-operations.md

- Page type: source (Source-summary batch B — Drive sheet)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/sheets/2025-vw-fs-capability-map-service-operations.md`)
- Review round: 1
- Key claims: Florian Wentzel-authored 23-row Business + IT capability map for VWFS Service Operations. Volume metrics: 3M phone contacts + 4M email + 4M postal items = ~11M contact volume/year. 4 customer segments (Leasing 1200+600 internal/external + Finanzierung + Direktbank + Firmenkunden = ~2700 service users). Legacy system inventory: SIKOM telephony + Hello.WDB SharePoint KB + Actico credit decisioning + Diva dealer interface + ZGP consent mgmt (to be replaced by Service Cloud). Dienstleister fluctuation 10-20%. Explicit Agentforce trajectory named: Hello.WDB Talk-Track suggestion "à la CoPilot → next step: Agent".
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + sources/drive-vwfs-pov-solution-design + sources/drive-vwfs-current-crm-challenges-improvements + sources/drive-vwfs-leasing-service-pov-timeline-20250308).

## [2026-07-09] merge | wiki/sources/drive-vw-after-sales-ai-use-cases.md

- Page type: source (Source-summary batch B — Drive sheet)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/sheets/vw-after-sales-ai-use-cases.md`)
- Review round: 1
- Key claims: Markus Müller-authored 28-use-case catalogue for VW After Sales AI. GDAS anchors UCs 2+3+4+5+10+11+13 (Guided Order Creation + False Warranty Claim + Downtime Analytics + Parts Management + CEM Analytics + Customer Care + Workshop Capacity Planning). PPSO anchors UCs 18+19. "Spread LEAD" = UCs 9+19+20+21 (ASID/Maintenance + AI PPSO Editor + Remote Repair + AI Doc Creation). UC 8 Dealer/Importer Feedback = JF-owned demo built on AC + Case Mgmt + Survey + Einstein AI. Blauth-to-Stefan escalation flag on UC 19. Celonis footprint flagged (UC 25).
- Orphan wikilinks introduced: none (targets entities/brands/vw + entities/vendors/spread-ai + entities/executives/stefan-imme + sources/drive-vwas-af-uc-2026-04-13-gemini-notes-de).

## [2026-07-09] merge | wiki/sources/drive-vwfs-ai-questionnaire-draft-v1-customer.md

- Page type: source (Source-summary batch B — Drive sheet, RFI response)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (row-by-row cells omitted in raw extract), completeness PASS
- Sources consulted: 1 (`raw/drive/sheets/vwfs-ai-questionnaire-draft-v1-customer.md`)
- Review round: 1
- Key claims: Thomas Fuchs-authored customer-facing RFI-style AI questionnaire for VWFS. Full Agentforce SKU/pricing schedule captured (Per-User unmetered $125 + Flex Credits $500/100K + $0.10/Action + Foundations $0 + A1E $550 + Sales/Service add-on $125 + Industries $150; final price "contact Volkswagen SAM"). Roadmap named (Spring '26 Automotive Cloud AF service management + Sales Concierge). Deployment posture MaRisk AT 9 + DORA Art. 28: Agentforce SaaS-only on Hyperforce AWS 3AZ + 99.9% SLA + EU residency + >18K customers in production + 25K+ SF internal users. EU AI Act: Most AF UCs = Limited/Minimal Risk; final decision remains with human. BYOLLM (OpenAI/Azure/Bedrock/Vertex). Zero-Copy Federation to Snowflake/Databricks/Redshift/BigQuery.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/executives/thomas-fuchs + entities/vendors/mulesoft + capabilities/agentic-enterprise-vwfs + entities/accounts/vw-sam).

## [2026-07-09] merge | wiki/sources/drive-vwfs-ger-services-ops-poc-sku-list.md

- Page type: source (Source-summary batch B — Drive sheet, deal-quality artefact)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/sheets/vwfs-ger-services-ops-poc-sku-list.md`)
- Review round: 1
- Key claims: Thomas Fuchs-authored SKU list for VWFS Germany Services Ops POC as of 2025-05-19. Baseline quantity 25 units across all named SKUs. Core product mix (Automotive Cloud Enterprise + AC Intelligence + Customer Community Plus + Einstein for Sales + Einstein for Service + Sales Cloud + Einstein Next Best Action + Einstein 1 Service + Service Cloud + Service Cloud Voice = all 25). Zero-qty SKUs (Amazon Connect voice minutes + Field Service+). Additional line items Service Cloud Voice - Minutes + Customer Data Cloud Starter + Data Cloud Storage.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/executives/thomas-fuchs + sources/drive-vwfs-pov-solution-design + sources/drive-vwfs-leasing-service-pov-timeline-20250308).

## [2026-07-09] merge | wiki/sources/drive-vwfs-cdc-scale-readiness-check-readout-20250903.md

- Page type: source (Source-summary batch B — Drive slides)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (only first 100 lines of 80-slide deck scanned in raw extract), completeness PASS
- Sources consulted: 1 (`raw/drive/slides/vwfs-cdc-scale-readiness-check-readout-20250903.md`)
- Review round: 1
- Key claims: Silke Sommerfeld-owned 80-slide CDC Scale Readiness Check readout for 2025-09-03 on-site presentation in Braunschweig. Kretzberg-anchored scope agreed on calls 2025-07-08 + 2025-08-06. 21 SF stakeholders + 15 VWFS HQ/market stakeholders interviewed over 4 weeks. Market voices captured verbatim (Germany "Digital Renewal has experienced consistent interruptions" + Portugal/Italy central-solution preference + Digital Unit "VWFS EU was a speedboat that realised it needed to come home to the tanker (Group)"). 4 Focus Areas + Market Enablement 3-part recommendation + Target Architecture Hybrid Data Cloud Architecture. CDC→MC activation "Resolved with workaround via automated scripts".
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/executives/alena-kretzberg + entities/executives/silke-sommerfeld + initiatives/vwfs-transformation + timelines/vwfs-architecture-evolution + entities/executives/stefan-imme).

## [2026-07-09] merge | wiki/sources/drive-vwfs-rfi-solution-proposal-loyalty-20221213.md

- Page type: source (Source-summary batch B — Drive slides, historical baseline)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 1 (`raw/drive/slides/vwfs-rfi-solution-proposal-loyalty-20221213.md`)
- Review round: 1
- Key claims: Anne Bögershausen-owned 25-slide Salesforce Solution Proposal responding to VWFS Customer Loyalty Program RfI December 2022. HISTORICAL BASELINE. MOBILITY2030 defines customer loyalty as FIRST of five strategic dimensions. VW SELA existed as of Dec 2022 ("Volkswagen Group and Salesforce have a mutually agreed frame contract (SELA) based on Master Subscription Agreement (MSA)"). Named original coverage team (Anne Bögershausen SAE + Markus Müller SSE VW Group + Anna Menck SE + Dinara Asam Junior SE + Birgitta Berger PM Loyalty). One.CRM referenced pre-current-naming in Slide 19 architecture stack ("One.CRM by brands/markets (existing)"). Loyalty product spec (Loyalty Advanced base + usage). Confirms Anne Bögershausen contact info Phone +49 152 01507035.
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + entities/executives/anne-bogershausen + initiatives/one-crm + initiatives/vwfs-transformation + entities/vendors/mulesoft + sources/drive-vwfs-knowledge-base-compilation + sources/drive-vwas-af-uc-2026-04-13-gemini-notes-de + sources/drive-vw-after-sales-ai-use-cases).

## [2026-07-09] merge | wiki/entities/products/automotive-cloud.md

- Page type: product (Product batch A — Salesforce SKU deployed at VW Group)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (per-account Auto Cloud footprint at Audi + VW AG inferred from Group Story slide + Companion Org list; no per-account deployment record consulted at page-scope), completeness PASS
- Sources consulted: 9 (FY27 AWT deck + DC1 at VWG deck + VWFS Ger SKU list + 3 Porsche C@P Replacement opps + 3 wiki pages)
- Review round: 1
- Key claims: Pricing $350 EE / $525 Unlimited / $750 Agentforce 1 Edition per Slide 44. Agentforce for Automotive $150 pupm add-on per Slide 46. Deployed at Porsche AG (three "CRM C@P Replacement" Won opps totalling $5.4M installed base). VW OEM MX active pipeline autocloud_IMPLEMENT $2.30M closing 2027-01-15. VW Group Story "Agentforce VISIONARY" per Slide 31. VWFS Germany POC SKU list 25 units AC + AC Intelligence per Thomas Fuchs 2025-05-19.
- Orphan wikilinks introduced: none (targets [[entities/products/agentforce-for-automotive]], [[entities/products/data-cloud-one]], [[entities/products/cap]], [[synthesis/diconium-partner-takeover-risk]] — all created in same batch or existing).

## [2026-07-09] merge | wiki/entities/products/companion-org.md

- Page type: product (Product batch A — Data Cloud architectural pattern)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 6 (DC1 at VWG deck + Strategic Frame v1 + DC scaling index + UK-limitations thread + Agentic Enterprise capability page + VW UK D360 initiative page)
- Review round: 1
- Key claims: Zero-copy metadata sync from Home Org; CRM orgs equipped with Data Cloud features via Companion Connection. Move (c) of Mack's Five Moves. Full VW Group Companion Org roster with Org IDs (VW AfterSales PROD `00DWz000004cZaL` + AVME PROD `00DWz000005nZg7` + Agentforce PoC Org `00DWz00000393g5` + Technical Foundation WhiteLabel). Feature parity gap central to VW UK escalation: "many features NOT developed for Companion Orgs" (Aravindh R 2026-06-11); KGs + Search Indexes not supported on Companion Orgs. R2 named risk at VWFS scale (30+ orgs).
- Orphan wikilinks introduced: none (targets [[entities/products/home-org]] + [[entities/products/data-cloud-one]] + capabilities/agentic-enterprise-vwfs + initiatives/vw-uk-d360 — all created in same batch or existing).

## [2026-07-09] merge | wiki/entities/products/data-cloud-one.md

- Page type: product (Product batch A — Salesforce Data Cloud One product)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 6 (DC1 at VWG deck + Strategic Frame v1 + DC scaling index + UK-limitations thread + Agentic Enterprise capability page + VW UK D360 initiative page)
- Review round: 1
- Key claims: DC1 = product enabling Home + Companion pattern; distinct from generic Data Cloud (single-org). VW Group CHOSEN strategy = Regional Data Cloud (6 instances) per 19.07.2023 VW K-OE decision — "aligns with the current VW MC org strategy". VW DC PROD Org ID `00D06000001T1yQ` (EU Home Org). D360 (fka Data Cloud). GA October 2024 per Mack Slide 12. 3-tier target architecture (GLOBAL OEM / REGIONAL OEM+NSC / MARKET NSC). Governance model separates central vs local.
- Orphan wikilinks introduced: [[entities/executives/reena-prabhakar]] flagged as candidate exec page.

## [2026-07-09] merge | wiki/entities/products/home-org.md

- Page type: product (Product batch A — Data Cloud architectural pattern)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 6 (DC1 at VWG deck + Strategic Frame v1 + DC scaling index + UK-limitations thread + Agentic Enterprise capability page + VW UK D360 initiative page)
- Review round: 1
- Key claims: Home Org holds Data Cloud Lakehouse + Core Platform Capabilities. Counterpart to Companion Org. VW DC PROD `00D06000001T1yQ` = EU Home Org. Sibling Home Orgs for NAR + RoW + FSAG (VWFS separate). Reena Prabhakar 2026-06-16: 3 years B2C data + tens of source connections + hundreds of thousands of profiles + every production data ingestion requires legal approval + Search Indexes must be on Home Org. Home Org pace = source of Dalton's £150k UK PoC waste + €12M AOV escalation. Gerhard Mack 75mio footprint trust framing.
- Orphan wikilinks introduced: none (targets already covered).

## [2026-07-09] merge | wiki/entities/products/cap.md

- Page type: product (Product batch A — Porsche-side CRM programme name)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (C@P Porsche vs CAP VWG-side terminology collision documented), coverage PASS_WITH_FLAGS (acronym expansion NOT resolved in any raw), completeness PASS
- Sources consulted: 8 (3 Porsche C@P Replacement opps JSON+MD pairs + porsche-ag wiki page + porsche-ag-renewal-2-sfa wiki page)
- Review round: 1
- Key claims: `C@P` (with @) appears ONLY in three Porsche AG opp names. Total across C@P Replacement series (all IsWon): $5,408,138.16. Landing opp $839,955.60 New Business 2025-05-28 + FDO 1 Add-On $2,847,287.64 2026-01-28 + FDO 3 Add-On $1,720,894.92 2031-01-28. Orchestrator hypothesis "Customer @ Porsche" UNVERIFIED in raw. Distinct from VWG-side `CAP` (Cloud Analytics Platform per SPREAD.AI partnership deck + Jan Besten PI update). Sales/Service/Marketing/Data + Agentforce scope per landing opp name.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/entities/products/agentic-enterprise.md

- Page type: product (Product batch A — Salesforce customer-facing narrative)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS, completeness PASS
- Sources consulted: 5 (WIP FY27 VWFS Agentic Enterprise deck + Strategic Frame v1 + SPREAD partnership update + FY27 VWFS CRM Architecture + Agentic Enterprise capability page)
- Review round: 1
- Key claims: WIP deck Philipp Maag (`pmaag@salesforce.com`, author-name "Thomas") 2026-07-07. Analyst-anchored (McKinsey/BCG/Deloitte/Accenture/Gartner/PwC 2025-2026). Gen AI paradox 78/80/<10% framing. Five vendor-neutral capabilities (Trusted data / Orchestration / Interoperability / Trust / Reusable platform). Salesforce product mapping to Data 360 / Agentforce Atlas / MuleSoft Agent Fabric / Shield / Salesforce Core. Named partial-fit gaps + mitigations. Recommended starting path 4-step (Pick lighthouse → context always available → weave agent fabric → harden governance). Ceiling 5-10% vs unlock 80% straight-through processing. Distinct from capability page (this = customer-facing NARRATIVE; capability page = FRAMEWORK).
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/entities/products/oem-business-platform.md

- Page type: product (Product batch A — customer-side platform initiative, currently blocked)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (single raw source for "OEM Business Platform" verbatim; scope + roadmap + owner NOT enumerated in raw), completeness PASS_WITH_FLAGS (product page for a thin-raw customer initiative)
- Sources consulted: 4 (DC scaling index + One.CRM initiative page + VW UK D360 initiative page + Jan Besten exec page)
- Review round: 1
- Key claims: "OEM Business Platform" string appears in exactly one raw source — Jan Besten 2025-09-12 PI planning update on `#volkswagen-data-cloud-adoption-scaling`. Listed as **non-committed** because "blocked by One.CRM architecture". One of six non-committed PI items (VW CV CAP connect / VW Poland use cases / VW UK DC PoC / VW France post-Snowflake / German Multi Brand org / Škoda predictive). Candidate customer-side architects (via One.CRM linkage): Yiyi Tang CARIAD + Andreas Seitz Audi. Scope + roadmap + product owner NOT enumerated in raw — `⚠️ scope unverified`. Customer-side; no Salesforce commercial vehicle references it directly.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/entities/products/agentforce-for-automotive.md

- Page type: product (Product batch A — Salesforce SKU)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (SKU name collision — "Agentforce for Automotive" per Slide 46 vs "Agentforce for Industries Add-on" per Slide 47 — both refer to same $150 pupm; VOICE SKU-boundary question Michelle Rubio-Cegelka 2026-06-30 unresolved), completeness PASS
- Sources consulted: 11 (FY27 AWT deck + VWG SIC Munich WIP + VWG Group Story slide + VWG Group Story DE-final + VWFS AI Questionnaire + PCNA channel index + vw-agentforce sales-workplace thread + Porsche C@P Replacement landing opp + 3 wiki pages)
- Review round: 1
- Key claims: $150 USD user/month add-on to Automotive Cloud EE & above per Slide 46. Includes Automotive-specific skills, Auto Predictive/Generative AI, Automotive dashboards + Tableau Next view-only, Unmetered User Capacity. Bundled at higher editions ($525 Unlimited + $750 Agentforce 1). VW Group "Agentforce VISIONARY" tag (Slide 31 + Group Story slides). Hans Paulini 2025-07-17 named it Sales Workplace landing SKU for VW Ireland 500 users. Becca Pearl 2026-06-02 PCNA quote in progress for "Enablement and Agentforce for Automotive"; Kenzie Duclos $65k with VW SELA pricing. Michelle Rubio-Cegelka 2026-06-30 flags VOICE SKU-boundary question (Auto Cloud OR AFA). #Agentforce hashtag inline in Porsche AG C@P Replacement landing opp `0063y00001BOwBkAAL`. VWFS AI Questionnaire (Thomas Fuchs) lists same $150 SKU as "Agentforce for Industries: $150/user/month (200+ Industry Use Cases)".
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/opportunities/vw-sam-renewal-290-sfa-14zoa2.md

- Page type: opportunity (Mid-tier opps batch — historical VW SAM SELA renewal)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (pre-Slack-ingestion era 2020-01-31; Description blank + LeadSource null + LastActivityDate null), completeness PASS
- Sources consulted: 7 (Opp `0060M000014ZoA2QAK` json+md + Renewal 170 sibling json + Renewal 81 SFA sibling json + vw-sam account md+json + vw-sam contracts)
- Review round: 1
- Key claims: Volkswagen SAM Renewal 290 SFA closed Won at $11,694,238.68 on 2020-01-31 (Owner Bernhard Zingerle). Generation-1 of the VW SAM three-generation SELA renewal ladder: 290 SFA (2020 Won $11.69M) → 170 Performance (2025 Won $38.44M) → 81 SFA (2030 pending $52.52M). Descending SKU-number naming convention ("Renewal N SKU": 290 → 170 → 81) suggests renewal numbers count down. Description blank; LeadSource + LastActivityDate null. Successor Renewal 170 Performance Description names composition explicitly: "5yr renewal; $37.3M PACV — Core $19M + MC $10.9M + Mulesoft $4.9M; transfer/swap rights; annual price adjustment via true-up" (Derek Byrne owner). This Opp's $11.69M is 30% of the 170 Performance $37.3M PACV baseline = plausible pre-Core-Consolidation cycle. Owner Bernhard Zingerle unusual (pre-territory-realignment) vs modern Patrick Schreier / Derek Byrne pattern.
- Orphan wikilinks introduced: none (targets entities/accounts/vw-sam + opportunities/vw-sam-renewal-81-sfa).

## [2026-07-09] merge | wiki/opportunities/man-truck-house-of-digital-csg-yhtkqa.md

- Page type: opportunity (Mid-tier opps batch — historical MAN CSG/Expedition loss)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (pre-Slack-ingestion era 2018-12-21; Description blank), completeness PASS
- Sources consulted: 9 (Opp `0060M000014yhtkQAA` json+md + 4 MAN loss sibling json + man-truck-bus account md+json + wiki/entities/accounts/man-truck.md)
- Review round: 1
- Key claims: MAN Exp New House of Digital CSG closed 991 - Lost - No Decision at $2,077,000 on 2018-12-21 (Owner Thomas Stauber). LeadSource = "Advisory Services - PA/CSE" (Program Architect / Customer Success Executive tier). Type = Expeditions. Customer program "New House of Digital" not decoded in raw. LastActivityDate 2018-04-25 = 7 days post-creation; 8-month dormant close. Anchor of the 5-of-5 pre-2024 CSG/Expedition dead-loss cluster on MAN (this + `0060M00001429NeQAI` + `0063y000017GuFzAAK` + `0063y000017JnzJAAS` + `0063y000018IJXuAAO` totalling $7,519,500). Ownership split: Thomas Stauber on Expedition-tier records (2018 + 2019); Jordi Perez on CSG SOW records (2022 + 2023); Hajar Abeis on FY23 duplicate. Modern pivot: contract 04172536 Activated 2025-02-01 → 2030-01-31 60-month SELA cohort + 2026-07-23 Executive SIC "MAN x Salesforce: Agentic AI @ Salesforce".
- Orphan wikilinks introduced: none (targets entities/accounts/man-truck + opportunities/man-truck-pam-expedition-429nea).

## [2026-07-09] merge | wiki/opportunities/man-truck-pam-expedition-429nea.md

- Page type: opportunity (Mid-tier opps batch — historical MAN CSM-led Expedition loss)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (pre-Slack-ingestion era 2019-09-17; Description blank), completeness PASS
- Sources consulted: 9 (Opp `0060M00001429NeQAI` json+md + 4 MAN loss sibling json + man-truck-bus account md+json + wiki/entities/accounts/man-truck.md)
- Review round: 1
- Key claims: PAM MAN Truck and Bus AG - Expedition closed Dead - Lost at $1,930,000 on 2019-09-17 (Owner Thomas Stauber). LeadSource = "CSM" (Customer Success Manager expansion motion). Type = Expeditions. "PAM" acronym not decoded in raw. LastActivityDate 2018-04-13 = 18 months of dormancy before formal close. Sibling to House of Digital CSG Opp ($2.08M Lost No Decision 2018); combined Thomas Stauber Expedition losses = $4.01M or 53% of the 5-of-5 $7.52M pre-2024 CSG/Expedition cluster on MAN. Distinction: Dead - Lost stage code (decisive customer no-go) vs sibling's Lost - No Decision 991 code (customer inaction). Contract `02166355` 85-month terminus in ~3 weeks post-close.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/opportunities/dieteren-renewal-220-performance-fksgqa.md

- Page type: opportunity (Mid-tier opps batch — historical D'Ieteren Renewal Gen-2)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (Description blank; no D'Ieteren Slack channel), completeness PASS
- Sources consulted: 11 (Opp `0060M000015FkSGQA0` json+md + Renewal 212 predecessor + Renewal 218 successor + AELA + AELA_Upside + account md+json + contracts + wiki/opportunities/dieteren-renewal-218-performance.md + wiki/entities/accounts/dieteren-automotive.md)
- Review round: 1
- Key claims: D'Ieteren Automotive Renewal 220 Performance + CPQ + Partner closed Won at $820,827.38 on 2022-11-30 (Owner Barry Abid). Generation-2 of the 4-year D'Ieteren renewal ladder: 2018 Won $612.69k ("Renewal 212") → 2022 Won $820.83k (this Opp) → 2027 pending $901.93k ("Renewal 218"). ~10% CAGR trajectory. Name reveals: 220 Performance Edition seats + 1255 SteelBrick CPQ + 2250 Partner Community. LastActivityDate 2021-09-16 = 14 months dormancy before Won-close (renewal-cycle normal at D'Ieteren). Contract `03285057` Activated 2022-12-01 → 2027-11-30 60-month matches Renewal 218 successor close date. Parallel 2026-Q2 AELA envelope (`006ed00000ThzkHAAR` $650k + `006ed00000f2gA1AAI` $610k upside = combined ~$1.26M) could supersede classical renewal cadence.
- Orphan wikilinks introduced: none (targets entities/accounts/dieteren-automotive + opportunities/dieteren-renewal-218-performance + opportunities/dieteren-crm-strategy-aela).

## [2026-07-09] merge | wiki/opportunities/vwfs-ag-2-advisory-csg-d8wwqa.md

- Page type: opportunity (Mid-tier opps batch — historical VWFS AG CSG Advisory Lost)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (pre-Slack-ingestion for the 2020-2021 era; vwfs-* Slack channels post-date 2024), completeness PASS
- Sources consulted: 9 (Opp `0060M000012d8wwQAA` json+md + `0060M000015sgmWQAQ` sibling Dead-No-Decision + 3 later Project-Booked SOWs + vwfs-ag account md+json + wiki/entities/accounts/vwfs-ag.md)
- Review round: 1
- Key claims: VWFS - 2 Advisory - CSG closed Dead - Lost at $780,000 on 2021-08-06 (Owner Thomas Stauber). Type = Order Form; LeadSource = Account Management. Description populated (rare in this batch): "VWFS building Salesforce Competence Center; PA July/Aug 2020 start; additional resources positioned." Three data points: (a) customer program was VWFS building Salesforce Competence Center — earliest raw evidence of what becomes the multi-year VWFS transformation motion; (b) Salesforce PA engagement started July/Aug 2020; (c) $780k Order Form was a scope-up on top of an already-in-play PA. LastActivityDate 2022-02-02 (6 months post-close). Sibling `0060M000015sgmWQAQ` "VW FS // CRM Rollout - Stage 2 ext. - #MS" closed Dead - No Decision at $1M on 2020-05-29. 2020-2021 $1.78M lost pipeline vs 2024-2025 $3.16M Project-Booked SOWs (Christopher Emmerich confirmed owner on 2 of 3 later SOWs).
- Orphan wikilinks introduced: none (targets entities/accounts/vwfs-ag + initiatives/vwfs-transformation + entities/executives/christopher-emmerich).

## [2026-07-09] merge | wiki/opportunities/vw-group-australia-renewal-137-full-crm-f64qqa.md

- Page type: opportunity (Mid-tier opps batch — historical VGA Renewal Gen-2)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (pre-Slack-ingestion for the 2021 renewal; Description blank + LeadSource null + LastActivityDate null), completeness PASS
- Sources consulted: 9 (Opp `0060M000015f64qQAA` json+md + Renewal 124 predecessor + Renewal 242 successor + 2025 SELA-adjusted successor + vw-group-australia account md+json + contracts + wiki/entities/accounts/vw-group-australia.md)
- Review round: 1
- Key claims: VW Group Australia Renewal 137 Full CRM + Platform + Analytics closed Won at $702,020.27 on 2021-02-14 (Owner Arman Razavizadeh). Generation-2 of the VGA renewal ladder: 2019 Won $577.70k (Thibault Guill) → 2021 Won $702.02k (Arman Razavizadeh) → 2024 Won $1.40M (Priscila Santos) → 2025 SELA-adjusted Won $1.54M. Contract `02617559` Activated 2021-02-15 → 2024-02-14 36-month aligned to this Opp close date +1 day. Analytics Cloud seats 91 → 1160 (12.8×) between 2019 and 2021 renewals = anomalous jump for further investigation. Parallel `0063y00001AjhAAAAZ` "AU/VGA/#Anypoint/Transfrom to UBP Phase 1" closed Dead - Lost 2025-02-24 $589k = MuleSoft Anypoint pursuit failed concurrent with 2025 SELA cycle.
- Orphan wikilinks introduced: none (targets entities/accounts/vw-group-australia + opportunities/vw-group-australia-renewal-124-full-crm-frjfqa).

## [2026-07-09] merge | wiki/opportunities/vw-group-sales-me-renewal-2229-mc-f655qa.md

- Page type: opportunity (Mid-tier opps batch — historical VW Sales ME MC renewal + Name/Account anomaly)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS (naming inconsistency between Opp Name and AccountId — Name references VGA but AccountId is Sales ME FZCO; unresolved in raw), coverage PASS_WITH_FLAGS, completeness PASS
- Sources consulted: 9 (Opp `0060M000015f655QAA` json+md + Renewal 2003 predecessor + Renewal 4684 successor + sibling VGA Full CRM Renewal 137 + vw-group-sales-me account md+json + vw-group-australia account md + contracts)
- Review round: 1
- Key claims: Volkswagen Group Sales ME Renewal 2229 MC ExactTarget + 5 MC Social closed Won at $688,258.72 on 2021-02-14 (Owner Arman Razavizadeh; same-day close as sibling VGA Renewal 137). Naming anomaly: Opp Name begins "Volkswagen Group Australia Pty Ltd Renewal 2229 MC ExactTarget, 5 MC Social" but AccountId = `0013000000LBbNKAA1` (VW Group Sales Middle East FZCO). Same pattern on predecessor 2003 MC ExactTarget renewal and successor 4684 MC ExactTarget renewal. MC ExactTarget seat growth 2003 → 2229 → 4684 (2.3× over 3 years). Coordinated MENA + APAC MC/Social + Full CRM renewal envelope on 2021-02-14 = $1,390,279 combined across VGA + Sales ME records.
- Orphan wikilinks introduced: none (targets entities/accounts/vw-group-sales-me + opportunities/vw-group-australia-renewal-137-full-crm-f64qqa).

## [2026-07-09] merge | wiki/opportunities/vw-group-australia-renewal-124-full-crm-frjfqa.md

- Page type: opportunity (Mid-tier opps batch — historical VGA Renewal Gen-1)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (pre-Slack-ingestion for the 2019 renewal; Description blank + LeadSource null + LastActivityDate null), completeness PASS
- Sources consulted: 10 (Opp `0060M000015FrJfQAK` json+md + Renewal 137 successor + Renewal 242 + 2025 SELA-adjusted + vw-group-australia account md+json + contracts + wiki/entities/accounts/vw-group-australia.md + wiki/opportunities/vw-group-australia-renewal-137-full-crm-f64qqa.md)
- Review round: 1
- Key claims: VW Group Australia Renewal 124 Full CRM + Platform + Analytics closed Won at $577,702.58 on 2019-02-15 (Owner Thibault Guill). Generation-1 of the VGA renewal ladder. Contract `02077572` Activated 2019-02-15 → 2021-02-14 24-month Thibault Guill = aligned to this Opp close date + 0 days. Renewal cadence discipline: 2019 → 2021 → 2024 → 2025 = mixed 2/3/1-year rhythm (12-month 2024→2025 collapse coincides with 2025-02-11 SELA roll-in crisis coordinated by Yuliya Siuld with Eric Speisser). Owner rotation Thibault Guill → Arman Razavizadeh → Priscila Santos = territory realignment across 5 years. Product growth: 124 Full CRM → 242 (2.0×) over 6 years; Analytics Cloud → Org Permission SKU category-shift between 2021 and 2024.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/opportunities/vw-de-mexico-ramp-2-u7jtqa.md

- Page type: opportunity (Mid-tier opps batch — historical VW MX Dead-Duplicate)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (Dead-Duplicate closes carry low signal; pre-Slack-ingestion), completeness PASS
- Sources consulted: 10 (Opp `0060M000013u7JTQAY` json+md + +237 EE primary Won record + Commerce PRM sibling + AutoCloud Dead-Lost 2025 + autocloud_IMPLEMENT current active + vw-de-mexico account md+json + wiki/entities/accounts/vw-de-mexico.md + wiki/opportunities/vw-de-mexico-autocloud-implement.md)
- Review round: 1
- Key claims: VW de México (+200 EE) Ramp 2 closed Dead - Duplicate at $563,129.52 on 2017-02-02 (Owner Maria Luz Casal(GG)). Type = New Business; LeadSource = "Salesforce AE". The parallel primary Won record `00630000012Ydk3AAC` "Volkswagen de México (+237 EE)" closed Won at $464,232.38 on 2017-05-31 = the operative record that carried the +EE ramp scope. $99k Amount gap between the duplicate ($563k) and the primary ($464k) unresolved in raw. Maria Luz Casal was the SOPS operator on early VW MX contracts (2016-11-11 → 2017-05-31 contract `01526107`; multiple 12-month contracts 2017-05-31 → 2018-05-30). Modern active successor is [[opportunities/vw-de-mexico-autocloud-implement]] $2.30M Stage 02 Scoping closing 2027-01-15.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/opportunities/ducati-renewal-13302-customer-portal-ikzqao.md

- Page type: opportunity (Mid-tier opps batch — historical Ducati Renewal + "Chatter to GAM" Description)
- Verifier verdicts (in-line): citation PASS, contradiction PASS, coverage PASS_WITH_FLAGS (pre-Slack-ingestion for the 2019 close; Description populated but terse), completeness PASS
- Sources consulted: 11 (Opp `0060M000014IKZiQAO` json+md + Renewal successor `0060M0000169Up0QAE` + MC-IT shadow renewal + Agentforce Enterprise BDR later + B2B Commerce BDR current + ducati account md+json + contracts + wiki/entities/accounts/ducati.md + wiki/opportunities/ducati-b2b-commerce-bdr.md)
- Review round: 1
- Key claims: Ducati Renewal 13302 Customer Portal + 2000 Partner + 86 SFA closed Won at $472,075.08 on 2019-12-13 (Owner Antonella Mascia). Description = "Chatter to the GAM into the account" (routing instruction; GAM not named). 13,302 Customer Portal seats is the load-bearing dealer/rider SKU on the account (dwarfing SFA 86 seats by 150×). Concurrent-close triplet 2019-12-13 / 2019-12-30 / 2019-12-31 = three renewals totalling $1,004,162.79 owned Antonella Mascia + Massimiliano Cereda MC-IT shadow. Modern SELA contract `04172409` Activated 2025-02-01 → 2030-01-31 60-month (Vikas Reddy Pochampally SOPS) aligned to Group envelope. Successor motion pivots to New Business under Davide Viganò: 2026-02-23 Dead-No-Decision $200k Agentforce Enterprise BDR + 2027-01-29 open $285k B2B Commerce BDR.
- Orphan wikilinks introduced: none.

## [2026-07-09] merge | wiki/overview.md (coverage-refresh 2026-07-09c)

- Page type: synthesis (group overview refresh)
- Verifier verdicts (in-line): citation PASS, contradiction PASS_WITH_FLAGS, coverage PASS, completeness PASS
- Sources consulted: 50 (44 wiki pages across accounts/execs/products/briefs/opps/initiatives/comparisons/questions/synthesis/timelines/capabilities/competitive/sources + wiki/index.md + prior overview state)
- Review round: 1
- Key claims: Coverage-refresh reflecting +49 pages since 2026-07-09b (8 products + 10 mid-tier opps + 17 Drive sources + 6 execs including Prabhakar + 5 Audi NSCs + 3 briefs) bringing wiki to 166 substantive pages (44 accounts + 35 execs + 9 vendors + 4 brands + 8 products + 18 opps + 7 initiatives + 5 questions + 3 comparisons + 2 synthesis + 3 briefs + 24 sources + 1 capability + 1 timeline + 2 competitive). NEW: product-layer footnote src-20 + index-scale footnote src-21. What-to-prioritise-next re-ordered by proximity: (1) 2026-07-10 SIC Munich execution → (2) VWGS ISV Partner Ops contract 16-day expiry → (3) D'Ieteren AELA close 20-day → (4) Move (e) real-time D360 validation → (5) Dreamforce 2026 Kretzberg brief. Depth-vs-thin: products populated, brands populated, comparisons populated; Audi NSCs stubs only; PPE platform not yet paged. Contradictions surfaced during refresh: (a) C@P (Porsche customer-side) vs CAP (VWG Cloud Analytics Platform) — now separately modelled as [[entities/products/cap]]; (b) Porsche €38m TCV vs SELA-win $2.85M Q4 FY26 (retained from 2026-07-09b, unresolved); (c) Automotive Cloud pricing card is Slide 44 authoritative (no cross-source contradiction, just different specificity levels).
- Orphan wikilinks introduced: none — every new reference resolves to an existing page.

## [2026-07-09] ontology | infranodus/*-ontology.md (append-only extension)

- Files touched: 7 (products-ontology.md NEW; full-wiki-ontology.md + opportunities-ontology.md + sources-ontology.md + executives-ontology.md + accounts-ontology.md + briefs-ontology.md APPENDED under "Appended 2026-07-09 — post-products+opps batch")
- Rule discipline: APPEND-ONLY per CLAUDE.md Phase C. Every existing line preserved verbatim; line count strictly grows on every file. Section header "## Appended 2026-07-09 — post-products+opps batch" placed after last existing content.
- New file: infranodus/products-ontology.md (~140 relations covering the 8 product pages — Automotive Cloud pricing card; Companion/Home/DC1 architectural triad; C@P + CAP terminology fix; Agentic Enterprise vs framework distinction; OEM Business Platform blocker; Agentforce for Automotive $150 SKU placement; VW Group Regional 6-instance CHOSEN strategy).
- full-wiki-ontology.md: appended ~50 relations covering product layer + generational renewal ladders + exec coverage expansion + Audi NSC stubs + briefs + Drive sources.
- opportunities-ontology.md: appended ~45 relations for the 10 mid-tier opps (account linkage, amount, stage, close date, ownership, predecessor cadence, anomalies).
- sources-ontology.md: appended ~65 relations for the 17 Drive sources (source → subject + author + topical cluster).
- executives-ontology.md: appended ~20 relations covering Prabhakar (CoE / Data Cloud / Home Org defender) + Slack UIDs + Buzinkay/Escortell/Pallás incremental relations.
- accounts-ontology.md: appended ~25 relations covering 5 Audi NSC stubs.
- briefs-ontology.md: extended with ~13 relations covering days-remaining framing, sibling brief links, and initiative/capability linkage.
- No contradictions surfaced during ontology append (structure is additive by design).

## [2026-07-09] research | Porsche €38m TCV ↔ $2.85M Closed Won reconciliation

- Investigation: candidate (a) multi-year multi-FDO ramp vs (b) supersession by SELA vs (c) missing larger opp.
- Page updated: `wiki/initiatives/porsche-38m-independent-trial.md` (review_round 1 → 2)
- Sources newly consulted: raw/drive/slides/vwg-sic-munich-20250616-wip.md (L192 "Porsche goes SF" + L253 "Porsche goes SF (Mai 2025)"), raw/drive/slides/vwfs-x-salesforce-sic-feedback-wip-20260602.md (L212 "Porsche strategisch für Salesforce entschieden, löst SAP mit Salesforce ab"), raw/org62/opportunities/006ed00000DzmOPAAZ (FDO 3 Won $1.72M CloseDate 2031-01-28), raw/org62/opportunities/006ed00000E33fdAAB (Renewal 2 SFA Stage 01 $4.80M CloseDate 2032-05-27), raw/org62/opportunities/0063y00001BOwBkAAL (initial C@P Won 2025-05-28 $839.96k), raw/org62/opportunities/006ed000008S5mYAAS (VW SAM Renewal 81 SFA Stage 01 $52.5M CloseDate 2030-01-31 — the second SELA cohort), raw/org62/contracts/porsche-ag-contracts (five 84-month Activated contracts 2025-05-28 → 2032-05-27).
- Verdict: **Candidate (a) supported** — multi-year multi-FDO ramp against the 84-month 2032-05-27 envelope. Evidence chain: (i) five 84-month contracts Activated 2025-05-28 → 2032-05-27 anchor envelope end-date matching Ralf Meyer's "Contract start May 2025 + first price ramp review Jan 2026" narrative; (ii) FDO 1 Won 2026-01-28 at $2.85M matches Jan-2026 price-ramp calendar; (iii) FDO 3 Won CloseDate 2031-01-28 = forward-committed Development Order — proves stepped multi-year commit structure; (iv) QBR Slide 8 "two pull-forward SELAs successfully closed" = Porsche + VW SAM Renewal 81; (v) Sung Hyun Yoon's 2026-01-28 "$4M deal thus far" matches sum of first two Won opps ($839,955.60 + $2,847,287.64 = $3,687,243.24 ≈ $4M). Candidates (b) and (c) rejected on evidence.
- Booked-to-date subtotal across four Porsche AG opps = $10,205,193.08 ≈ 27% of €38m TCV. 73% delta likely explained by (i) missing FDO 2 opp record (naming gap between FDO 1 and FDO 3), (ii) future FDOs 4-N through 2032-05-27, (iii) VW SAM-mediated $7M shelfware per QBR Slide 5, (iv) Salesforce PS SOWs booked separately.
- New review_flags: 4 (up from 3) — added flag on FDO 2 missing from raw + expanded TCV alignment flag.
- New footnotes added: src-11 (Porsche AG contracts) + src-12 (initial C@P Won) + src-13 (SIC Munich 2025 "Porsche goes SF") + src-14 (VWFS SIC feedback Porsche replaces SAP) + src-15 (FDO 3 record) + src-16 (VW SAM Renewal 81 SFA) + src-17 (Porsche AG account record).
- Content added: § Reconciliation section + Booked-to-date reconciliation table + updated Related opportunities + updated Contradictions + resolved Open Question on TCV alignment.

## [2026-07-09] research | SIC MUC 2026-07-10 attendee list verification

- Investigation: verify wiki brief's inferred attendee list against actual raw evidence.
- Page updated: `wiki/briefs/sic-munich-2026-07-10.md` (review_round 1 → 2)
- Sources newly consulted: raw/slack/channels/ZC-C0B0L32JEKG-sic-EMEA-Volkswagen-AG-Jul-10/index.md (channel_id C0B0L32JEKG, 10 messages, participants Elisa Bergmann + Sam Hubner + Maximilian Wittig + Anne Bögershausen + Laura Pavic + Stephanie Fuchs; first_message 2026-04-29, last_message 2026-05-27) + Slack MCP `slack_read_canvas` on the linked SIC Prep Canvas F0B0N4Y92CA + `slack_read_file` on the linked Prep Doc + `slack_search_public_and_private` on "SIC Munich July 10 Volkswagen attendees" and adjacent queries.
- Verdict: **Attendee list VERIFIED NOT-FILLED in raw as of T-1 day** (2026-07-09). The SIC Prep Canvas and SIC Prep Doc — the SSOT documents linked from the Slack channel kick-off message — remain blank-template placeholders. No customer attendees, no discussion leader assignments, no agenda time-blocks have been populated. The 2026-05-27 kick-off message from Elisa Bergmann asked AE Anne Bögershausen to complete the canvas "prior to our kick-off call" — that completion has not been performed (or was not persisted to the SSOT canvas).
- Confirmed attendees in raw (Salesforce SIC team + AE only): Elisa Bergmann (Coordinator), Maximilian Wittig (Strategist), Laura Pavic, Stephanie Fuchs, Sam Hubner, Anne Bögershausen. All joined 2026-05-27.
- Inferred (retained from prior brief version, now clearly marked as inferred): Customer-side likely = Alena Kretzberg + Stefan Imme + Hauke Stars + Nathalie Scardino. Salesforce discussion leaders likely = Thomas Fuchs + Silke Sommerfeld + Gerhard Mack + Jessica Geutner.
- New section added: `## Known unknowns (as of 2026-07-09)` with 8-item T-24h escalation list (full attendee list, start/end time, room, agenda time-blocks, discussion leaders, dietary restrictions, meeting objectives, red flags).
- New footnotes added: src-7 (Slack channel + Prep Canvas verification) + src-8 (2026-07-07 DF26 planning channel adjacent evidence for account team composition).

## [2026-07-09] research | Slack channel discovery completeness

- Investigation: is `.cache/manifest/slack-acquired.md` complete or did initial 20-per-query cap leave a long tail?
- Page created: `wiki/questions/slack-discovery-completeness.md` (new)
- Method: `mcp__slack__slack_search_channels` re-run with `query=volkswagen cursor=Q1VSUkVOVF9QQUdFOjI=` (page 2) + `query=cariad` (3 results, all in raw) + `query=momentum` (20 results, all Momentum.io product noise). Sample-read of two highest-signal newly-discovered channels: `acct-volkswagen-group-data-cloud` (C06882JECFL) + `ZC:C08KKNH3U9G:Volkswagen Financial Services AG`.
- Finding: **20 previously-unindexed VW-scoped channels** on the `volkswagen` query page 2 alone. Break-down: 6 Zoom Record Channels (ZC:*) — VWFS AG + VWFS AU + VW SAM + VW D'Ieteren Finance + 2 SIC prep; 4 acct-* legacy channels (Mexico ×2 + VW SAM + VW Group Data Cloud); 3 SIC prep channels (SIC-119100 AWT Frankfurt + SIC-140820 VW UK London + Regrello DF25); 3 case/escalation channels (VW AG 472694045 + VWFS AG escalation + VW India 472150111); 2 Central OU program (`central-af-proj-volkswagen`, `tab-volkswagen-tableau-global`); 1 VW India tech-ops; 1 WEF Davos 2026 exec-outreach.
- Recommendation: re-run Slack collector with cursor-based pagination on each keyword (`volkswagen`, `vw`, `audi`, `porsche`, `skoda`, `vwfs`, `bentley`, `lamborghini`, `ducati`, `traton`, `scania`, `man`, `powerco`, `agentforce`, `dxone`, `sela`, `datacloud`, `mulesoft`) with `limit=20` iterating pages 2-5. Estimated 30-50 additional channels — doubles the raw Slack footprint from 56 → 90-110.
- Not-ingested by design: full ingestion of 20+ channels + adjacent queries is out of scope for this research pass (~8-min discovery cap). Discovery gap documented as a `wiki/questions/*` page; ingestion follow-up filed as recommendation.

## [2026-07-09] refresh | wiki/initiatives/vw-uk-d360.md

- Trigger: new wiki pages `entities/executives/reena-prabhakar.md`, `entities/products/companion-org.md`, `entities/products/home-org.md`, and refreshed `entities/executives/lucy-trott.md` (22 sources) landed as downstream consumers of the £12M AOV escalation claims.
- Coverage verdict before revision: PASS_WITH_FLAGS
- Revised: yes (frontmatter only — added 4 wiki cross-refs to `sources_consulted`, appended review_flag, incremented review_round 1→2; inline wikilinks added to home-org, companion-org, lucy-trott, reena-prabhakar)
- New sources added: 4 wiki pages (all downstream consumers, no new raw claims)
- Key new claims: none — the four new wiki pages consume this initiative's claims. No contradiction surfaced. No raw activity in `raw/slack/channels/volkswagen-data-cloud-adoption-scaling/` past 2026-06-29 as of this refresh.
- Review round: 2

## [2026-07-09] refresh | wiki/initiatives/vwfs-transformation.md

- Trigger: check against `entities/products/agentic-enterprise.md`, `briefs/sic-munich-2026-07-10.md`, `entities/executives/gerhard-mack.md`, and the 17 new Drive source pages.
- Coverage verdict: PASS
- Revised: no
- New sources added: 0 — the page already cites 17 Drive sources including `wip-fy27-vwfs-agentic-enterprise-202606xx.md`, `fy27-vwfs-crm-architecture-20260714.md`, `vwfs-strategic-frame-v1.md`, `vwfs-x-salesforce-sic-feedback-wip-20260602.md`, and 12 more. All downstream pages (agentic-enterprise product page, sic-munich brief, gerhard-mack exec page) consume this initiative page's claims verbatim.
- Key new claims: none. No contradiction surfaced between vwfs-transformation.md and the downstream consumer pages.
- Review round: 2 (unchanged)

## [2026-07-09] refresh | wiki/initiatives/one-crm.md

- Trigger: new wiki pages `entities/products/oem-business-platform.md`, `entities/executives/yiyi-tang.md`, `entities/executives/andreas-seitz.md`, `entities/executives/jan-besten.md`.
- Coverage verdict before revision: PASS_WITH_FLAGS
- Revised: yes (frontmatter only — added 4 wiki cross-refs to `sources_consulted`, appended review_flag, incremented review_round 1→2; inline wikilinks added to yiyi-tang, andreas-seitz, jan-besten, oem-business-platform in Stakeholders + Salesforce angle sections)
- New sources added: 4 wiki pages (all downstream consumers, no new raw claims). Notable: `jan-besten.md` resolved the earlier role/company contradiction (Jan Besten = salesforce-team, not customer-side CARIAD as orchestrator prompt had originally suggested) — one-crm.md was already consistent with this.
- Key new claims: none. Title format "Large Solution Architect ONE.CRM" now cross-confirmed across Audi (Andreas Seitz) and CARIAD (Yiyi Tang) exec pages — same as one-crm.md already stated.
- Review round: 2

## [2026-07-09] refresh | wiki/initiatives/porsche-38m-independent-trial.md

- Trigger: check against `entities/executives/ilana-heimbring.md`, `entities/executives/thomas-plack.md`, `entities/brands/porsche.md`, `entities/products/cap.md`.
- Coverage verdict: PASS
- Revised: no
- New sources added: 0 — the page already cites both exec pages (ilana-heimbring, thomas-plack) via wikilinks and both product/brand pages (porsche brand, porsche-ag account) cross-link back to the initiative. The `cap.md` product page explicitly disambiguates Porsche C@P vs VWG CAP without introducing new claims about the €38m trial.
- Key new claims: none. No contradiction surfaced. The TCV-alignment open question (€38m 2025-05-07 vs $2.85M Q4 FY26 SELA-win opp `006ed00000AEMxNAAX`) remains unresolved across all pages consistently — the newer pages did not surface reconciling raw material.
- Review round: 1 (unchanged)

## [2026-07-09] lint | wiki health check (lint-cycle-01, first ever)

- Orphans found: **2** — auto-fixed 1 typo (`vwsam-renewal-81-sfa` → `vw-sam-renewal-81-sfa` in `wiki/initiatives/porsche-38m-independent-trial.md`); filed 1 as `todos/lint-2026-07-09-orphan-elisa-bergmann.md`. The earlier orphan-batch todos in `todos/orphan-wikilinks-*.md` are now stale (targets since authored, updated in place).
- Stale pages: 0 (no page > 90 days old; wiki is 2 days old)
- Missing wikilinks auto-fixed: **365** across 115 pages — exec-name mentions converted to wikilink format `entities/executives/{slug}` per exec; 17 mentions correctly skipped (footnote-only definitions); 5 edge cases left in place (hyphenated compounds and frontmatter-quoted strings — auto-fix declined by-design)
- Contradictions escalated: 0 (`wiki/contradictions/` empty)
- Coverage gaps: 3 clusters filed to `todos/lint-2026-07-09-coverage-gaps.md` — Audi regional NSC stubs (LOW), Škoda customer-side stakeholder pool (MEDIUM), VWFS AG customer-side org (HIGH)
- Uncited raw: 80 Org62 opp records unreferenced; filed to `todos/lint-2026-07-09-uncited-org62-opps.md` (all Slack channels and Drive docs are cited — 100% coverage there)
- Data-quality anomalies: 4 new items appended to `wiki/data/anomalies.md § 12. Wiki-side hygiene (lint-surfaced 2026-07-09)` — 9 pages with pending verifier status (highest-severity discipline gap, filed to `todos/lint-2026-07-09-pending-verifier-status.md`)
- Auto-fix quality-check: sampled 5 pages post-fix. All wikilinks read naturally in-line; no broken sentences observed.
- Recommendation for next lint cycle: **shorten cadence to bi-weekly** while wiki is still in early rapid-growth phase (≥20 new pages/week). Return to monthly once page-add velocity settles.

## [2026-07-09] audit | data quality — 60+ anomalies (audit-2 first-run sweep)

- Trigger: first run of `.agents/data-quality-auditor.md` (audit-2 sweep, following the seeded 2026-07-09 audit-1 baseline).
- Scope: 38 raw/org62/accounts JSONs (full sweep), 167 raw/org62/opportunities MDs (top-20 by Amount + fwd-dated + overdue), 38 raw/org62/contracts MDs (record-count sweep), 38 raw/org62/contacts MDs (zero-contacts sweep).
- Rows appended to `wiki/data/anomalies.md` (append-only):
  - §1 Revenue mis-key: +17 new rows (Bentley, CARIAD, Diconium, Škoda-DE, Audi AG, VW AG, VW Ireland, VW Italia, VW Leasing, VWN, VW South Africa, PowerCo, VW Group España, Seat, VWFS AG, VW do Brasil, TRATON)
  - §2 Group-scope inheritance: +8 new rows including 5-record employee cluster (Bentley/CARIAD/Škoda-DE/VW Ireland/VWFS UK all at exactly 294,183) and 2-record revenue clusters (Diconium=VW Motorsport at $283.2B, VW Ireland=Italia at $76.0B)
  - §3 Zero-contacts: +14 new rows; quantified pattern at 47% (18 of 38 accounts)
  - §4 Forward-dated LAD: +9 new rows; quantified pattern at 32% (12 of 38 accounts have LAD > today, 8 exceed today+30d)
  - §5 Industry misclass: +7 new rows (Porsche Bank SIC 6159 mis-key + VWFS UK same, CARIAD Technology anomaly, NSC-family SIC drift 5599/5012/5511, D'Ieteren SIC 3710 deprecated, TRATON Industry re-affirmed)
  - §6 Dead-record dormancy: +4 new rows (TRATON holding shell, PCNA, VW Group of America, VW Aktiengesellschaft)
  - §9 Owner assignment gaps: +1 note on 3 system-managed API-Internal owners on operating NSC records
  - §10 Blank Description on high-value opps (NEW section): 20-row table; 17 of top-20 opps blank. Top-3 blank-desc VW SAM opps = $102.9M. Patrick Schreier concentration: $57.3M pipeline across 2 blank-desc opps.
  - §11 Overdue active opps (NEW section): 1 orphan opp `006ed00000WopePAAR` on VW Aktiengesellschaft MDM shell (87 days overdue, $0 amount, Eamon Fennell).
  - Systemic patterns extended with 6 new meta-findings (nos. 5-10 in the Systemic patterns section).
- Escalation filed: `todos/data-quality-blank-descriptions-mega-opps.md` (P0 — Patrick Schreier's $52.5M VW SAM + $4.8M Porsche AG blank-desc concentration risk).
- Wiki `review_flags` cross-references (frontmatter only, bodies untouched): 13 pages — `audi-ag.md`, `cariad-se.md`, `bentley-motors.md`, `skoda-auto-de.md`, `traton.md`, `scania.md`, `vw-group-italia.md`, `vw-group-ireland.md`, `vwfs-uk.md`, `porsche-bank-ag.md`, `powerco.md`, `vw-sam-renewal-81-sfa.md`, `porsche-ag-renewal-2-sfa.md`.
- Coexists with concurrent lint-01 update: this audit added §§ 1-11 + Systemic patterns rows; lint-01 added § 12 (Wiki-side hygiene). Section numbering and row ordering preserved append-only.
- Raw not touched. Findings are report-only (auditor discipline; the account owner or admin fixes them in Org62).

## [2026-07-09] refresh | wiki/entities/accounts/vwfs-ag.md

- Trigger: new Slack material — `raw/slack/channels/volkswagen-financial-services-ag-escalation/` (index + aged-case-469054797 thread, 2024-11 → 2025-02 Red Account episode), `raw/slack/channels/sev1-vwfs-ag-473637815/index.md` (2026-06-10 Data Cloud Sev-1), `raw/slack/channels/central-af-proj-volkswagen/index.md` (2025-04-15 zero-consumption Agentforce alert), `raw/slack/channels/ZC-C08KKNH3U9G-Volkswagen-Financial-Services-AG/index.md` (VWFS AG ZC coordination channel)
- Coverage verdict before revision: FAIL — five material events not on the page (Red Account 2024-11-15, Signature Success loss 2025-02-27, sev1 2026-06-10, Anna Sowinska external AMS friction pattern, VW zero-consumption Agentforce alert 2025-04-15)
- Revised: yes
- New sources added: 5
- Key new claims: (1) Red Account 2024-11-15 → 2025-02-05 arc with should-forget API WAD verdict + budget-constraint signal 2025-01-14; (2) Signature Success loss confirmed 2025-02-27 (Ulrich Moritz) — support downgraded to Premier, confirmed on 2026-06-10 sev1 case metadata; (3) 2026-06-10 Data Cloud sev1 case 473637815 (Nanda Kiran K + Thomas Fuchs) — third Data Cloud escalation across 16 months (2024-04, 2024-11 → 2025-02, 2026-06-10 pattern); (4) Anna Sowinska (extern.anna.sowinska@vwfs.com) external AMS with no case-closure authority — auto-close/reopen loop pattern; (5) Nina (Platform Operations Manager, VWFS) surfaces as internal case-closure decision-maker; (6) 2025-04-15 VW named among 14 zero-consumption Agentforce customers in production (Pasquale Zecca Central OU escalation to Christoph Jentsch + Anne Bögershausen)
- Review round: 4

## [2026-07-09] refresh | wiki/initiatives/vwfs-transformation.md

- Trigger: `raw/slack/channels/volkswagen-financial-services-ag-escalation/` (index + aged-case thread) + `raw/slack/channels/sev1-vwfs-ag-473637815/`
- Coverage verdict before revision: FAIL — Red Account / Signature Success loss arc absent from transformation-gap origin narrative; page treated the July 2025 Dana channel as the transformation kickoff
- Revised: yes
- New sources added: 3
- Key new claims: (1) Pre-transformation-programme relationship-health section added (2024-11 → 2025-02 Red Account + Signature Success loss + Holger Wieprecht budget-constraint signal 2025-01-14 pre-dates the Baggley "50% budget cuts" SIC brief by 5 months); (2) Signature-to-Premier support motion downgrade added as material context on the "transformation gap" arc origin; (3) Data Cloud escalation continuity documented via 2026-06-10 sev1 case (pattern predates and post-dates the transformation programme)
- Review round: 3

## [2026-07-09] refresh | wiki/competitive/palantir-ontology-vs-sf-spread.md

- Trigger: `raw/slack/channels/wef-davos2026-volkswagen-software-asset-management/index.md` + `raw/slack/channels/wef-davos2026-volkswagen-software-asset-management/2026-01-08-sic-133042-briefing-thread.md`
- Coverage verdict before revision: FAIL — third independent citation of Palantir at VWG existed in raw (WEF Davos 2026-01-21 SIC-133042 briefing) but page still described the competitive framing as two-source-confirmed
- Revised: yes
- New sources added: 2
- Key new claims: (1) THREE-source-confirmed upgrade (from two-source): 2026-02-03 deck + 2026-05-08 deck + 2026-01-21 Davos briefing — Miguel Milano's internal ammunition ask + Alex Wallner Palantir talking points to Hauke Stars 2026-01-25 is the first customer-tier CIO-board-level datapoint; (2) Palantir upgraded from "Salesforce-side consistent narrative" to "customer-tier board-level concern"; (3) Spread.AI SF-investment status upgraded from Drive-only to Drive + Slack cross-source (Jentsch 2026-01-14 briefing addition confirms SF investment intent known ~3 months pre-May-2026-partnership-deck)
- Review round: 2

## [2026-07-09] refresh | wiki/overview.md

- Trigger: `raw/slack/channels/wef-davos2026-volkswagen-software-asset-management/` (index + SIC-133042 briefing thread)
- Coverage verdict before revision: PASS_WITH_FLAGS → borderline FAIL — WEF Davos 2026-01-21 as first anchor in the 2026 SIC governance arc was missing; overview only referenced the May 2026 SIC SF + July 2026 SIC MUC nodes
- Revised: yes (targeted revision — new SIC arc governance paragraph + Palantir three-source-confirmed upgrade + Spread.AI cross-source note + review_round bump)
- New sources added: 0 direct (overview cites wiki pages, not raw — but wiki/competitive/palantir-ontology-vs-sf-spread.md now backs it with the new Davos raw)
- Key new claims: (1) Davos → SF → Munich three-node SIC governance arc added as workstream context; (2) Palantir framing upgraded to three-source-confirmed with customer-tier CIO-board-level datapoint; (3) Data Cloud C360 6-markets-live-with-legal-blocker signal recorded at CIO tier via Davos briefing; (4) AC&DC "critically delayed with self-critical SF PS attribution" surfaced from Davos briefing; (5) Informatica displacement-hedge language ("questions may be raised about the future of Informatica") documented from Davos briefing as a January-2026 internal SF thought predating the May 2026 Spread partnership deck
- Review round: 2

Refresh cycle recommendation: run coverage against `raw/slack/channels/ZC-C08EVTA0JUC-Volkswagen-Software-Asset-Management/`, `raw/slack/channels/ZC-C0B8N20SG0P-sic-wt-lon-VW-Group-UK-SIC-140820/`, `raw/slack/channels/ZC-C08CZ6JEDJ6-Volkswagen-DIeteren-Finance/`, `raw/slack/channels/ZC-C095N8Y92KV-Volkswagen-Financial-Services-Australia/`, `raw/slack/channels/volkswagen-sic-regrellodemo-df25/` next — most likely-affected pages: `wiki/entities/accounts/vw-sam.md`, `wiki/entities/accounts/dieteren-automotive.md`, `wiki/initiatives/vw-uk-d360.md`, plus a new VWFS Australia stub if the AU channel warrants a dedicated page (2025-07-15 Ingrid Prowse creation). The AC&DC delay signal from the Davos briefing may also require a new dedicated `wiki/initiatives/ac-dc.md` page if not yet extant.

## [2026-07-09] refresh | wiki/entities/accounts/vw-sam.md

- Trigger: `raw/slack/channels/ZC-C08EVTA0JUC-Volkswagen-Software-Asset-Management/index.md` (30-message ZC channel, 2025-02-24 → 2026-02-25)
- Coverage verdict before revision: FAIL — dedicated VW SAM ZC channel was previously flagged absent in review_flags; now consulted
- Revised: yes (frontmatter source add + review_round 1→2 + Relationship history 5 new dated entries 2025-02-24/26/28, 2025-04-18/22 + Recent internal discussion rewritten to acknowledge ZC channel + Key contacts row for Nils Apeler CTO + Products in play new SELA 3.0 addenda + Agentforce Momentum 100 sub-sections)
- New sources added: 1 (`raw/slack/channels/ZC-C08EVTA0JUC-Volkswagen-Software-Asset-Management/index.md`)
- Key new claims: (1) SELA 3.0 Mulesoft addendum closed 2025-02-28 (Opp `006ed000009VrAwAAK`, Steffen Schostok) effective 2025-03-01; (2) SELA 3.0 Marketing Cloud addendum closed 2025-04-22 (Opp `006ed000009iRH5AAM`, Daniel Kral) effective 2025-04-01; (3) VW SAM confirmed **Momentum 100** account tier via 2025-04-18 Agentforce Consumption Plan bot; (4) Nils Apeler, CTO, marketing-engaged 2025-02-26 via AWT Frankfurt Sign-Up (Campaign Member `00ved000009FSV4AAO`, Christoph Jentsch owner); (5) Two additional related ZC channels flagged for future ingestion (`#sic-awt-ffm-volkswagen-119100` and pre-ZC `#acct-volkswagen-software-asset-management-gmbh`)
- Review round: 2
- Verifier discipline: serial in-line (four passes run against same content per CLAUDE.md § "Checker discipline — note on parallelism")

## [2026-07-09] refresh | wiki/entities/accounts/dieteren-automotive.md

- Trigger: `raw/slack/channels/ZC-C08CZ6JEDJ6-Volkswagen-DIeteren-Finance/index.md` (10-message channel) + `2025-02-12-deloitte-agentforce-lab.md` thread
- Coverage verdict before revision: FAIL — previously flagged "No dedicated D'Ieteren Slack channel in acquired inventory"; the VDFin JV channel is now the closest ingested source and pulls in the parent (D'Ieteren) marketing environment explicitly
- Revised: yes (frontmatter 2 new sources + review_round 1→2 + Recent internal discussion opened with substantive VDFin ZC channel narrative 2025-02-12/14 + 2026-02-27 + Products in play added Marketing Cloud parent-dependency + Foundations Core Base Edition posture + Deloitte Agentforce Lab attendee facts + Open questions extended)
- New sources added: 2 (VDFin channel index + Deloitte Agentforce Lab thread)
- Key new claims: (a) VDFin marketing environment = D'Ieteren parent's Salesforce config (Emilie Vanoverberghe 2025-02-12); (b) 3 VDFin attendees at Deloitte Agentforce Lab 2025-02-17 focus autonomous marketing agents, Jonathan Maes Deloitte contact; (c) VDFin on Core Base Edition (Peter Tobac 2025-02-14) Foundations eligibility affected; (d) Johan Portier incoming CEO VDFin ~2026-02-27 (fleet.be external cite); (e) Belgium account team (Muguerza, Vanoverberghe, Tobac, Bertrand, Van Fraeyenhoven, Ben Mahjoub) separately staffed from DACH VW motion
- Review round: 2
- Verifier discipline: serial in-line

## [2026-07-09] refresh | wiki/initiatives/vw-uk-d360.md

- Trigger: `raw/slack/channels/ZC-C0B8N20SG0P-sic-wt-lon-VW-Group-UK-SIC-140820/index.md` (24-message AWT London SIC prep channel, 2026-06-08 → 2026-06-25)
- Coverage verdict before revision: PASS_WITH_FLAGS → borderline FAIL — AWT London 2026-06-18 SIC-140820 was the customer-facing surface of the ongoing D360 escalation and was missing from the page; timing sits between Lucy Trott 2026-06-16 three-option post and 2026-06-19 "Dalton confirmed still hard blocker"
- Revised: yes (frontmatter 1 new source + review_round 2→3 + new AWT London SIC-140820 subsection under Salesforce angle > Related SIC UKI + Timeline 2 new entries 2026-06-18 + 2026-06-25 + Open questions 2 new items on Kelly Goode/Kamila Kelly roles + AWT SIC outcome)
- New sources added: 1
- Key new claims: (a) AWT London SIC-140820 held 2026-06-18 11:00-11:55 BST in Space 17 (Org62 SIC record `a1oed00000RdiUfAAJ`); (b) Topic Agentforce & Exec Connect in Account Team Meeting format (self-run); (c) SF team Lucy Trott owner + Chris Burgess RVP + Darpesh Rupareliya SE + Dennis Keane; (d) SIC coordinator David Donofrio; (e) Customer attendees Kelly Goode + Kamila Kelly (added late 2026-06-15 despite room oversubscription); (f) AWT London event delivered 241 total SIC meetings; (g) Google Slides deck permalink Lucy Trott 2026-06-18 08:31
- Review round: 3
- Verifier discipline: serial in-line

## [2026-07-09] add | wiki/entities/accounts/vwfs-australia.md (STUB)

- Trigger: `raw/slack/channels/ZC-C095N8Y92KV-Volkswagen-Financial-Services-Australia/index.md` (15-message ZC channel, 2025-07-15 → 2026-05-27, Ingrid Prowse creator)
- Coverage verdict: PASS_WITH_FLAGS (STUB — sole raw source ingested; no Org62 record yet)
- New page: `wiki/entities/accounts/vwfs-australia.md`, page_type=account, slug=vwfs-australia
- New sources added: 1
- Key claims: (a) VWFS Australia = Australian arm of VW Financial Services; (b) ZC channel created 2025-07-15 by Ingrid Prowse; (c) Two LDP screening cycles (Nov 2025 HOLD→CLEAR 10h; Mar 2026 HOLD→CLEAR 5d) both cleared; (d) Team-formation phase, no organic customer conversation; (e) 11 SF-side channel participants Ingrid Prowse-led; (f) Not linked to a Salesforce record as of 2026-02-25 (Request Dispatch bot)
- Cross-links: [[entities/accounts/vw-group-australia]] parent-adjacent + [[entities/executives/ingrid-prowse]] AE + [[entities/accounts/vwfs-ag]] group captive-finance parent (inferred)
- Review round: 0
- Verifier discipline: serial in-line

## [2026-07-09] add | wiki/initiatives/ac-dc.md (STUB, COVERAGE-GAP)

- Trigger: 2026-01-21 WEF Davos SIC-133042 briefing flagged AC&DC as "critically delayed with self-critical SF PS attribution"
- Coverage verdict: PASS_WITH_FLAGS (STUB + coverage-gap — acronym not disambiguated in raw)
- New page: `wiki/initiatives/ac-dc.md`, page_type=initiative, slug=ac-dc
- New sources added: 3 (`raw/slack/channels/wef-davos2026-volkswagen-software-asset-management/index.md` + `2026-01-08-sic-133042-briefing-thread.md` + `raw/slack/channels/central-af-proj-volkswagen/index.md`)
- Key claims: (1) AC&DC is a customer-side project referenced in the 2026-01-21 SIC-133042 Meeting Goals bullet 4 alongside Data Cloud C360 + HR Service Center; (2) Framed as "critical with project delay", steering "should have been stronger" from both VWG internal and SF PS; (3) Countermeasures being initiated as of 2026-01-15 briefing draft (details not enumerated in raw); (4) Christoph Jentsch protected Stefan Imme wording on the adjacent "insufficient capable VWG employees" bullet; (5) Cross-referenced from Pasquale Zecca's `#central-af-proj-volkswagen` VW zero-consumption Agentforce diagnosis as "same theme, different angle"
- Open questions filed (8 total): AC&DC acronym expansion (⚠️ unverified — not in raw); VWFS-vs-VWG scope; commercial anchor; customer-side sponsor; countermeasure enumeration; adjacency to Agentforce consumption gap / Data Cloud C360 / AfterSales
- Prompt-vs-raw flag: prompt frames AC&DC as VWFS AG programme; Davos raw frames as VWG-level (Hauke Stars-visible). Filed as Open Question rather than asserted.
- Review round: 0
- Verifier discipline: serial in-line

Refresh cycle recommendation (post-batch): AC&DC acronym disambiguation is the highest-value next research thread — targeted grep of Drive docs + Org62 opps/contracts for "AC&DC", "ACDC", "AC & DC", "AC-DC", "After-Sales Cloud", "Application Cloud Data Cloud", or any VWFS-scoped SOW Name containing "AC" would materially resolve the stub. Second priority: fetch Org62 record for VWFS Australia (`ZC:C095N8Y92KV` linkage not yet on channel per Request Dispatch bot 2026-02-25). Third priority: fetch the `#sic-awt-ffm-volkswagen-119100` (C08PJMYDFQR) + pre-ZC `#acct-volkswagen-software-asset-management-gmbh` (C02PVRWP6QY) channels to close VW SAM coverage.

## [2026-07-09] slack-batch-post-Phase-5 | 3 new pages + 4 refreshes

Follow-up batch after Slack Phase 5 (15 new channels landed with major intel). Orchestrator watchdog target: 4-5 fully merged pages out of 7. Delivered: **all 7 fully merged**.

### New pages merged (3)

**1. `wiki/initiatives/vwg-after-sales-coworker-memory.md`** (page_type: initiative)
- Trigger: `raw/slack/channels/vwg-agent-multiconversation-coworker-memory/index.md` (30 messages, 2026-06-09 → 2026-07-01, channel_id C0B9AQEM2AW)
- Sources consulted: 1 (the sole raw channel index)
- Verifier verdict: citation=pass, contradiction=pass_with_flags, coverage=pass, completeness=pass
- Key claims: VWG After Sales / GOC → ~20k European dealer users September 2026 rollout; four "blocker" issues (multi-tab record conversations + shared conversations across users + browser refresh persistence + Interactive Answer Mechanism VW Jira `WEARTEIGHT-3084`); Coworker & Skills timeline (info-gathering now → C/R/E/D end June 2026 → Memory along July → Skills towards DF25 September 2026); Palantir competitive threat framed in channel purpose statement ("trying to blame us by every identified missing requirement"); Deloitte SI (Karolina AF Dev lead); Salesforce TV filming at VW dealer 2026-06-17-19; Solution-design 8-item agreement Mack↔Bottomley 2026-07-01; environment IDs After Sales DEV 00D9O00000Jx61d + After Sales QA 00D9K00000GzJFu + .scaletest.
- **Prompt-vs-raw attribution flag**: orchestrator prompt named "Ricardo Bergallo-created 2026-06-09" but raw channel index unambiguously names Gerhard Mack as creator. Zero raw hits for "Bergallo". Writer defers to raw. Filed as review_flag.
- Review round: 1

**2. `wiki/entities/vendors/dx-one.md`** (page_type: vendor)
- Trigger: `raw/slack/channels/ZC-C0B7ERFLXA6-dxone-DC-MC/index.md` (8 messages, 2026-06-01 → 2026-06-08, channel_id C0B7ERFLXA6) + `raw/slack/channels/dxone-cariad-vw-staffing/index.md` (channel_id C08GSE8P0NA, existing but not previously written up as vendor page)
- Sources consulted: 2
- Verifier verdict: all-pass
- Key claims: dx.one GmbH = VW-integrated distributed-marketing dealer platform provider (~2,500 dealers); HQ implied at Berlin EUREF-Campus 22 (Reverse Demo location); three-part workflow (Dealer Portal + Data Management & Segmentation + Marketing Execution); Julia Schleussner Salesforce AE for both DC+MC motion (this ZC) + separate Global Ticketing ZC C0A0XDTS86Q (deferred, not ingested); named dx.one contacts Claudia Ladewig + Volker Adrian (evasive on timeline/budget 2026-06-01); parallel CARIAD/VW staffing surround per `#dxone-cariad-vw-staffing` (Heidi Wiedner 2025-03-10, bench overflow flag 2025-12-01 with Daniel + Florian + Moritz "likely still working at dx.one").
- Review round: 1

**3. `wiki/entities/executives/claudio-domenicali.md`** (page_type: executive)
- Trigger: `raw/slack/channels/ZC-C0AE1P7Q5HN-Ducati-Motor-Holding-SpA/index.md` (30 messages, 2026-02-05 → 2026-06-05, channel_id C0AE1P7Q5HN) + `raw/slack/channels/sic-amer-ducati-oct2025/index.md` (30 messages, 2025-08-11 → 2025-11-12, channel_id C099Z1214TE)
- Sources consulted: 2
- Verifier verdict: citation=pass, contradiction=pass, coverage=pass, completeness=pass_with_flags (no first-person Domenicali statements captured; all third-party)
- Key claims: CEO of Ducati Motor Holding S.p.A. (Bologna); under his leadership Ducati exceeded €1B revenue in 2026 per Forbes article shared on Ducati ZC 2026-05-25; **CEO-CEO dinner Domenicali × Marc Benioff 2026-06-16** (flagged 2026-06-04 by Davide Viganò — highest-signal exec-level moment in raw); board-level escalation anchor SIC AMER 2025-10-02 delivered ("went very well with Andrea, Massi, Henning" — Marc Escobosa post-SIC) → 2025-11-12 CIO + CFO wanted to present slides to CEO + Board → 2026-04-27 Capgemini SI selection → 2026-06-16 Benioff dinner.
- Review round: 1

### Refresh pages merged (4)

**4. `wiki/entities/accounts/ducati.md`** — refresh round 1 → 2
- Trigger: `raw/slack/channels/ZC-C0AE1P7Q5HN-Ducati-Motor-Holding-SpA/index.md` + `raw/slack/channels/sic-amer-ducati-oct2025/index.md`
- Coverage verdict before revision: FAIL (5 new material claims: Domenicali×Benioff dinner 2026-06-16 + Capgemini SI 2026-04-27 + SIC AMER Oct 2025 escalation to CIO/CFO/CEO+Board 2025-11-12 + reference decks BMW CIO slide 15 & VW slides 17-18 + dedicated Ducati ZC channel_id C0AE1P7Q5HN)
- Revised: yes
- New sources added: 2 (both new Slack channels)
- Key new claims: dedicated Ducati Slack channel resolves prior review_flag ("No dedicated Ducati Slack channel in the acquired inventory"); relationship-history expanded with 2025-08 SIC prep → 2025-10-02 SIC delivery → 2025-11-12 board-escalation → 2026-02-05 ZC → 2026-04-27 Capgemini → 2026-05-25 Forbes → 2026-05-29 BMW CIO deck reuse → 2026-06-04 Benioff dinner flag → 2026-06-16 dinner; recent-internal-discussion section rewritten around the two new channels
- Review round: 2

**5. `wiki/entities/accounts/lamborghini.md`** — refresh round 1 → 2
- Trigger: `raw/slack/channels/ZC-C0AK0PB4L1W-Automobili-Lamborghini-SpA/index.md` (24 messages, 2026-03-03 → 2026-05-12, channel_id C0AK0PB4L1W)
- Coverage verdict before revision: FAIL (dedicated Lamborghini Slack channel now available; 2026-03-27 six-workstream priority stack + 2026-05-12 Einstein → Agentforce Flex Credits swap + Lamboforce Dreamforce-analog reference + Deloitte SI for agentic use case were all uncaptured)
- Revised: yes
- New sources added: 2 (Lamborghini ZC + cross-reference to Ducati ZC for reference-deck pattern)
- Key new claims: Lamborghini ZC C0AK0PB4L1W kickoff 2026-03-03 FY26 Agentforce goal + 2026-03-26 in-person at Sant'Agata Bolognese + six workstreams (B2B Commerce + Retail Experience + Informatica + D2C Marketing Cloud Next + Agentic with Deloitte + Tableau); parallel Italy team Agentforce pursuit with Ducati (Viganò, Iannuzzi, Bilotta, Daniele on both accounts); reference-deck pattern hypothesized (BMW CIO slide 15 + VW slides 17-18 confirmed on Ducati side; Lamborghini reuse implied by shared-team pattern — timing-hedged since Lamborghini ZC last message 2026-05-12 predates Ducati reference-deck posts of late May)
- Review round: 2

**6. `wiki/entities/accounts/man-truck.md`** — refresh round 1 → 2
- Trigger: `raw/slack/channels/ZC-C0B72HAD4DA-sic-EMEA-MAN-Truck-Bus-Org-2/index.md` (12 messages, 2026-05-29 → 2026-07-09) + `raw/slack/channels/ZC-C08NGTJ6D0C-MAN-Truck-Bus-bv/index.md` (7 messages, 2025-04-16 → 2026-02-25)
- Coverage verdict before revision: PASS_WITH_FLAGS → FAIL (previously-asserted "No dedicated MAN Slack channel" now partially-superseded; Netherlands b.v. entity + Org-2 Munich SIC prep both newly ingested)
- Revised: yes
- New sources added: 2
- Key new claims: MAN Truck & Bus AG Org-2 = **second SIC in 2026 calendar year** (March 2026 PI Planning at Munich SIC + July 23 2026 Executive SIC = Org-2 = second); Experience-Only SIC scope split; MAN Truck & Bus b.v. Netherlands entity is distinct from Munich HQ record; **new Commercial Director at MAN Truck & Bus b.v. — Coen Goorhuis** as of 2025-10-15 (via Vey Joeglal); March 2026 catering pattern "mushroom burgers + branded cookies" reference (Ilana Heimbring 2026-06-24)
- Review round: 2

**7. `wiki/entities/accounts/vw-do-brasil.md`** — refresh round 1 → 2
- Trigger: `raw/slack/channels/ZC-C0A4JUZUJM7-VW-do-Brasil/index.md` (10 messages, all 2025-12-17, channel_id C0A4JUZUJM7)
- Coverage verdict before revision: FAIL (2025-12-17 credit-retention escalation event uncaptured; contradicts implicit "healthy Tier-1 Enterprise Customer" surface)
- Revised: yes
- New sources added: 1
- Key new claims: **VW do Brasil placed in credit retention as of 2025-12-17** for unpaid Tableau invoices since October 2025; escalated to SWL (Sales Worldwide Leaders) global collection leaders; **Monica Alves Franco** = Salesforce Brazil credit/collections lead (channel creator); channel is single-day (2025-12-17) collections-escalation record, not a commercial-motion channel; Contradictions section explicitly added the "healthy account vs credit-retention" flag
- Review round: 2

### Batch summary

- 3 new pages + 4 refreshes = **7 pages** touched
- Verifier discipline: **serial in-line** (all four verifiers per page, one after the other)
- Orphan wikilinks introduced: minimal — `sources/slack-sic-amer-ducati-oct2025` referenced from Domenicali page but not yet created as a source-summary page (candidate for future source-batch); other new wikilinks target existing pages (Gerhard Mack, Davide Viganò, Christoph Emmerich, Ilana Heimbring, Jan Besten, Christoph Jentsch, Beatriz Mantovanini, Capgemini, Deloitte, Diconium)
- Contradictions surfaced (across all 7 pages, none unresolved):
  - Coworker/Memory initiative: prompt named Ricardo Bergallo as channel creator; raw names Gerhard Mack. Writer defers to raw. Filed as review_flag.
  - VW do Brasil: "healthy Tier-1 Enterprise Customer" Org62 surface vs 2025-12-17 credit-retention Slack signal. Explicitly documented in Contradictions section (not a data conflict; Org62 Rating field independent of billing status).
  - Lamborghini: reference-deck reuse across Ducati and Lamborghini is a hypothesis anchored on shared-Italian-team pattern; explicit timing hedge added (Lamborghini ZC last message 2026-05-12 predates Ducati reference-deck posts of late May).
- Index updated: three new anchor entries added to `wiki/index.md` (Initiatives + Vendors + Executives sections, each under a new "Slack-batch-post-Phase-5" 2026-07-09 sub-header).

## [2026-07-09] batch-cite | 80 uncited opps → account-page backlogs

- Trigger: `todos/lint-2026-07-09-uncited-org62-opps.md`
- 80 opps cited across 27 account pages
- Method: appended `## Opportunity backlog` table per account (Opp Id + Name + Type + Amount + Stage + Close + Owner), sorted by Amount desc; single shared footnote `[^src-oppbacklog]` per page listing all cited raw files; `sources_consulted:` frontmatter extended; `review_round` bumped +1; `last_verified` refreshed to 2026-07-09
- No new opp pages created (per linter recommendation — 78 of 80 are Dead/Closed historical or trivial-amount)
- Pages touched (opp count desc): audi-ag (5), porsche-bank-ag (5), vw-south-africa (5), vw-group-sales-me (4), audi-of-america (4), skoda-auto-cz (4), vw-group-espana (4), powerco (4), vw-group-services (4), cariad-se (4), diconium (4), seat (3), vwfs-uk (3), vw-group-australia (3), vw-group-ireland (3), vw-group-italia (3), vw-ag (3), vw-de-mexico (2), vw-do-brasil (2), vw-group-polska (2), ducati (2), dieteren-automotive (2), vw-motorsport (1), porsche-ag (1), vw-sam (1), vw-nutzfahrzeuge (1), vw-aktiengesellschaft (1)
- Anomalies surfaced (candidates for `wiki/data/anomalies.md`):
  - **Mis-keyed account cluster**: 4 VW-Group-Australia-named opps (`0063y000017Ahz9AAC`, `0063y000016nHbQAAU`, `0063y000016NbsFAAS`, `0060M000015Fv6kQAC`) are attached to VW Group Sales Middle East FZCO's Account Id in Org62 — historical mis-key predating the FZCO/AU separation
  - **Audi-AG courtesy-org cluster**: 5 zero-dollar Anne Bögershausen courtesy/sandbox opps 2025-03 → 2026-03 = OEM-Org rollout signal, not commercial pipeline
  - **CARIAD zero-dollar cluster**: 4 opps at $0 or $3–4k = provisioning artefacts, not revenue
  - **Porsche Bank all-Dead cluster**: 5 of 5 uncited opps are Dead (Lost / No Opportunity / Duplicate) 2025-08 → 2026-06 = sustained pipeline attrition
  - **VW-South-Africa forward-dated + duplicate MC_ZA_AO_VWSA_Digi pair** (`006ed00000NF1JWAA1` + `006ed00000Tye0IAAR`, 20 days apart, one Dead-No-Opportunity + one Dead-Duplicate) = classic dup-log pattern
- Todo status: closed
- Verifier discipline: none (mechanical batch-cite, appendix-only, no factual claims beyond raw-file transcription); flagged as `PASS_WITH_FLAGS`-equivalent via preserved `verifier_status:` values

## [2026-07-10] source-summary batch C | 7 last-uncited Slack channels indexed

- Trigger: close remaining 7 uncited Slack channels post-Phase 5
- Pages merged (all PASS on serial 4-verifier discipline, round 1):
  - [[sources/slack-acct-powerco]] — NAME-COLLISION Powerco Limited NZ (E&U account) — NOT VW-scope, documented for exclusion
  - [[sources/slack-collab-vw-traton]] — 2022-09 Slack Corp × SF joint kickoff for Traton + MAN + Scania + Navistar + RIO; Sandra Reich = VW Digital Triangle contact; Traton Slack MC tenant `475663355671` free plan
  - [[sources/slack-powerco-se-rfp-net-zero]] — VW PowerCo SE Net Zero Cloud RFP arc **lost by ghosting 2025-12-16**; Informatica DPP/Battery Passport bundle theory; escalation candidate for dedicated opp/loss page
  - [[sources/slack-red-vwfs-ag-salesforce-platform-2025]] — 2nd VWFS AG Red Account channel (Platform Product & Technology); stub-only (5 msgs); real coordination in `#volkswagen-financial-services-ag-escalation`
  - [[sources/slack-sic-emea-bentley-motors-uk-20112024]] — Nov 2024 Bentley Motors UK SIC London **cancelled 2024-11-11** (customer rescheduled to Crewe Jan 2025); Kirsty Bennett + Paul Barnes named
  - [[sources/slack-sic-london-vw-group-23-apr-2025]] — Apr 2025 VW Group UK SIC **delivered** Auto Cloud + Data Cloud (framed via VWAG parent strategy with Eric Speisser + Gerhard Mack); 6 SF + 8 customer attendees
  - [[sources/slack-volkswagen-pursuit]] — 2022-10 VW Australia pursuit (2-day channel); "Cupra is direct and Volkswagen is B2B2C" verbatim; EV rollout end-2023; VGA-AA Ecosystem v5.2 PDF referenced (not yet ingested)
- Escalation candidate: `powerco-se-rfp-net-zero` merits its own opportunity/loss page (first documented ghosted-loss on VW subsidiary RFP with active Informatica bundle theory)
- Verifier discipline: serial in-line 4-verifier per page; all PASS round 1; each source page cites only its single raw index file
- Index updated: `wiki/index.md` § Sources § Source-summary batch C (2026-07-10)

## [2026-07-10] source-summary batch C follow-up | 3 pages (2 new + 1 refresh)

- Trigger: follow-up on source-summary batch C — surface the ghosted-loss opp, the Sandra Reich stub exec, and add the 2022 historical anchor to the VW Australia SELA rollin synthesis
- Pages merged (serial in-line 4-verifier discipline, round 1 for new pages, round 2 for refresh):
  - [[opportunities/powerco-nzc-rfp-ghosted-loss]] — **NEW** — PowerCo SE Net Zero Cloud RFP ghosted 2025-12-16 (Karin instructed not to communicate); Peter Taubitz Loss Review Call requested; Informatica bundle theory (DPP/Battery Passport prior-year buy) as SF-side hypothesis; Denis Bogotsch 2025-11-01 move did not open door; VW SAM no PowerCo jurisdiction confirmed by Eric Speisser 2025-11-28; 4 operational lessons for future PowerCo RFPs. Verdict: citation PASS + contradiction PASS + coverage PASS_WITH_FLAGS (no Org62 opp record, loss review outcome unknown, bundle theory SF-hypothesis) + completeness PASS.
  - [[entities/executives/sandra-reich]] — **NEW STUB** — VW "Digital Triangle" cross-functional coordinator (IT + Digital + Electric Unit + Business); single raw signal (Rainer Hoesl mention on `#collab-vw-traton` 2022-09-16 16:43:26 BST); no email/LinkedIn/title/reporting-line surfaced; four-year silence in raw post-2022; three resolution paths filed (Traton FS event series, VW Enterprise Grids deck ingestion, terminology cross-check against ONE.CRM). Verdict: citation PASS + contradiction PASS + coverage PASS_WITH_FLAGS (stub with clear purpose) + completeness PASS_WITH_FLAGS.
  - [[synthesis/vw-australia-sela-rollin]] — **REFRESH round 2** — added Historical anchor section citing `#volkswagen-pursuit` 2022-10 (Trevor Taylor "Cupra is direct and Volkswagen is B2B2C" verbatim + $500 online deposit + dealer balance + ~3-year gap from Oct 2022 pursuit → Feb 2025 roll-in via 3 intermediate channels + Taylor→Prowse AE handoff); flagged VGA-AA Salesforce Ecosystem Overview v5.2.pdf F047QS4HY78 (3.4MB) as coverage-gap ingestion candidate. Verdict: citation PASS + contradiction PASS (Trevor Taylor→Ingrid Prowse handoff aligns with ingrid-prowse.md) + coverage PASS_WITH_FLAGS (new PDF ingestion flag) + completeness PASS. Review round incremented 1 → 2.
- Verifier discipline: serial in-line 4-verifier per page
- No new orphan wikilinks introduced (all wikilinks target existing pages: powerco, powerco-battery-pass-infa, eric-speisser, anne-bogershausen, ilana-heimbring, ingrid-prowse, traton, one-crm, vw-sam, vw-group-australia, vw-group-sales-me, vw-group-polska, vw-south-africa, vw-group-italia, yuliya-siuld — all merged previously)
- Index updated: `wiki/index.md` § Opportunities + § Entities — Executives entries appended for the 2 new pages; synthesis refresh update appended

## [2026-07-10] merge | 8 VWFS customer-side execs (linter Gap 3 closure)

- Trigger: `todos/lint-2026-07-09-coverage-gaps.md` Gap 3 (VWFS AG customer-side org) — highest-priority coverage gap flagged by lint-cycle-01. VWFS Transformation is the largest active initiative (€10M+ pipeline exposure via VW UK D360 + VWFS UK M120 Agentforce); customer-side stakeholder page gap = MEDDPICC gap on the highest-signal initiative in the wiki.
- Pages merged (serial in-line 4-verifier discipline, round 1 for all):
  - [[entities/executives/claudia-garz]] — **NEW** — Salesforce-side (role: salesforce, not customer as originally scoped). Business Transformation Architect on VWFS POV team (cgarz@salesforce.com). Author of the 2025-06-12 VWFS Stakeholder & Communication Overview sheet — the canonical VWFS stakeholder map cited across Dahlheim/Kretzberg/Hattesohl/Bandmann/Plack pages. 14 @-mention conversations with Florian Wentzel in POV Solution Design. Verdict: citation PASS + contradiction PASS + coverage PASS_WITH_FLAGS (Drive-only signal, no Slack UID) + completeness PASS.
  - [[entities/executives/thomas-sutter]] — **NEW** — VWFS AG customer. Interim IT Restructuring Manager (Garz sheet) / "IT HQ + interim CIO GER" (Imme). Widest customer-side surface area on the internal R&R deck (3-of-6 workstreams: Platform BV & Implementation Case + Platform Strategy Governance & Operations + Future Engagement Opportunities). Y status "New since Feb — neutral but thinks 'SF is expensive'". Plack-sponsored. Duplicate Org62 records flagged (Managing Director + Head of IT Applications, same email). Verdict: citation PASS + contradiction PASS_WITH_FLAGS (Org62 duplicate) + coverage PASS_WITH_FLAGS (Drive-only, no Slack) + completeness PASS.
  - [[entities/executives/volker-stadler]] — **NEW** — VWFS AG customer. CEO Bank per Imme 2025-07-02. On the "wenig bis kein Engagement" pole of the split ("Manuela & Nils VS. Caro, Joachim & Volker Stadler"). Direktbank cluster = SAP-adjacent. Not on Garz sheet Board table (Markt-DE CEO seat, not VWFS AG Board). Not on 2026-05-21 SIC SF attendee list. Verdict: citation PASS + contradiction PASS + coverage PASS_WITH_FLAGS (2 sources; no Slack; no Org62 grep-hit) + completeness PASS.
  - [[entities/executives/manuela-voigt]] — **NEW** — VWFS AG customer. CEO Leasing (Imme) / VWFS CEO Market Germany (Garz sheet) — dual role framing reconciled. **Previous Salesforce Product Owner in 2020**. G-status on Decision-Makers table ("positive, opened the pitch, ready to support"). "Guter SF Support" pole of the split. Imme's board-reach-out map: "Manuela/Silke". SIC SF-feedback deck L3199 "M. Voigt tbc" on Use Market DE prioritization workstream. Verdict: citation PASS + contradiction PASS_WITH_FLAGS (role framing) + coverage PASS_WITH_FLAGS (no Slack) + completeness PASS.
  - [[entities/executives/nils-uphoff]] — **NEW** — VWFS AG customer (scope confirmed: named consistently as Leiter Service Operations VWFS GER, business-side stakeholder in Capability Map). Auftraggeber Service Leasing per Imme. **Business Value Case owner** per internal R&R deck (3-of-6 workstreams). Y status "Very positive wording but expresses equal start for SAP vs SF". Owns 15+ Capability-Map rows (3M Telefonkontakte, 4M Poststücke, 4 Kundengruppen). "Guter SF Support" pole. Verdict: citation PASS + contradiction PASS + coverage PASS_WITH_FLAGS (Drive-only, no Slack) + completeness PASS.
  - [[entities/executives/matthias-knappstein]] — **NEW** — VWFS AG customer. Head of IT Operations. 2026-05-21 SIC SF attendee (5-of-5 IT-leadership peers welcome slide). Org62 record `003ed00000dgqIHAAY` 2026-05-24. 2-source signal. Verdict: citation PASS + contradiction PASS + coverage PASS_WITH_FLAGS (2 sources, no Slack) + completeness PASS.
  - [[entities/executives/joern-lange]] — **NEW** — VWFS AG customer. Head of Data & Analytics. 2026-05-21 SIC SF attendee. Owner-pair with Thomas Fuchs on Joint DAL Deep Dive workstream ("VWFS: J, Lange / SFDC: Thomas"). Jörn vs. Jörg Lange (Imme L26 "Jörg Lange (IT)" Senior Projektleiter) ambiguity flagged — assumed same person given VWFS-DE overlap + phonetic proximity, but not fully reconciled in raw. Verdict: citation PASS + contradiction PASS_WITH_FLAGS (Jörn/Jörg name variance) + coverage PASS_WITH_FLAGS + completeness PASS.
  - [[entities/executives/mareike-garz]] — **NEW** — VWFS AG customer. Head of Platform Services. 2026-05-21 SIC SF attendee. Org62 record `003ed00000dgqIIAAY` 2026-05-22. **Distinct from Claudia Garz** (Salesforce-side) — shared surname only, disambiguation section on both pages. Not named on Garz stakeholder sheet 2025-06-12 nor Imme exec summary — appears in raw only via SIC SF welcome slide + Org62. Verdict: citation PASS + contradiction PASS + coverage PASS_WITH_FLAGS (2 sources, no Slack) + completeness PASS.
- Contradictions raised (documented in-page, no filings to `wiki/contradictions/`):
  - Thomas Sutter Org62 duplicate (Managing Director + Head of IT Applications, same email `thomas.sutter@vwfs.com`)
  - Manuela Voigt role framing (CEO Leasing vs VWFS CEO Market Germany) — reconciled as dual title
  - Jörn Lange vs Jörg Lange (Imme spelling) — assumed same person
  - Claudia Garz ⇄ Mareike Garz — distinct people (Salesforce vs VWFS AG), shared surname only
- Role assignment: 1 Salesforce (Claudia Garz), 7 customer (VWFS AG). Claudia Garz's role determined from cgarz@salesforce.com + membership in Salesforce Team roster + drive-owner authorship of stakeholder sheet.
- Verifier discipline: serial in-line 4-verifier per page (per CLAUDE.md checker-discipline note)
- No new orphan wikilinks introduced. All cross-references target existing pages: alena-kretzberg, christian-dahlheim, caroline-hattesohl, christian-bandmann, thomas-plack, thomas-fuchs, jessica-geutner, silke-sommerfeld, dana-birkholz, christopher-emmerich, stefan-imme, caro-kreft, heike-witte, petra-faeth (all previously merged).
- Index updated: `wiki/index.md` § Entities — Executives (new batch entry appended)
- Linter todo closed: `todos/lint-2026-07-09-coverage-gaps.md` § Gap 3 — CLOSED with list of 8 pages merged.

## [2026-07-10] ontology-append | post-VWFS-customer-execs batch

- Append-only ontology sweep for the ~55 wiki pages added/refreshed since the previous full sweep. Every append lives under a new `## Appended 2026-07-10 — post-VWFS-customer-execs batch` section header per ontology file. No pre-existing line rewritten.
- **Per-file line-count delta table:**

  | File | Before | After | Delta |
  |---|---|---|---|
  | `infranodus/executives-ontology.md` | 299 | 408 | +109 |
  | `infranodus/full-wiki-ontology.md` | 577 | 703 | +126 |
  | `infranodus/data-ontology.md` | 114 | 174 | +60 |
  | `infranodus/opportunities-ontology.md` | 168 | 224 | +56 |
  | `infranodus/initiatives-ontology.md` | 135 | 198 | +63 |
  | `infranodus/sources-ontology.md` | 169 | 221 | +52 |
  | `infranodus/synthesis-ontology.md` | 55 | 87 | +32 |
  | **Total** | **1517** | **2015** | **+498** |

- **Scope covered:**
  - Executives: VWFS Board tier full four-node MEDDPICC scorecard (Dahlheim/Bandmann/Kretzberg/Bartölke Board + Stadler/Voigt/Sutter CEO-tier + Kreft/Faeth/Witte/Hattesohl/Lange/Knappstein/Garz/Uphoff Head-of-tier) with `hasBoardStatus` + `hasSFSponsor` + `hasSponsorshipGap` + `answersTo` relations. Also Škoda Czech program (Petrýdes/Malý/Žídek/Valova) and Salesforce-side additions (Claudia Garz, Sandra Reich).
  - Full-wiki: MEDDPICC-Drought synthesis, PowerCo NZC RFP Ghosted Loss, AC&DC initiative, VWG After Sales Coworker/Memory, dx.one vendor, VWFS Australia STUB account, VWG C360 Rollout timeline, VW Agentforce Consumption Gap synthesis, 27-account Opp-Backlog aggregate signal, anomalies §10-12 backfill.
  - Data: MEDDPICC-Drought P0 escalation + top-3 exemplars + Section-10 counter-example (Renewal 170 populated Description shape) + Sections 11-12 + audit-2 systemic patterns.
  - Opportunities: PowerCo NZC ghosted-loss, mis-keyed cluster (VGA-named on Sales ME), Porsche Bank dead-cluster, Audi Courtesy-Org cluster, Schreier+Heimbring ownership concentration, 80-opp uncited backlog.
  - Initiatives: AC&DC (Automotive Cloud + Data Cloud paired-SKU delivery stack; L1 sponsor Imme; delivered by SF PS + Spread.ai; Davos flag) + VWG After Sales Coworker/Memory (Gerhard Mack creator; Palantir competitor; 4 blocker issues; September 2026 rollout to 20k dealers) + sibling-initiative cross-link between the two.
  - Sources: 15 Slack Phase 3-5 source pages tagged with `aboutAccount`/`aboutInitiative`/`aboutContract`/`aboutCeremony`/`aboutVendor` and a new `RFP-Response-bot origin pattern` cross-source relation.
  - Synthesis: VW Agentforce Consumption Gap thesis + evidence + escalation route + latent-churn implication.
- **Top-5 newly-appended relation codes** (all documented in-section-header where introduced):
  1. `hasBoardStatus` — MEDDPICC status color at Board tier (Green/Yellow/Red-uncertain). Makes the VWFS Board scorecard queryable.
  2. `hasSFSponsor` / `hasSponsorshipGap` — Salesforce-side sponsor mapping to customer-side execs; gap edges surface the 2 unmapped Board-adjacent VWFS stakeholders.
  3. `ridesOnSKU` — programmatic dependency on a Salesforce SKU (Automotive Cloud, Data Cloud, Agentforce). Load-bearing for AC&DC vs Data Cloud C360 disambiguation.
  4. `ghostedBy` — unilateral customer-side non-response as an opportunity-outcome edge. First exemplar PowerCo NZC 2025-12-16.
  5. `hasP0Issue` / `escalatesTo` — anomaly-to-P0-synthesis escalation edge; used on MEDDPICC-Drought section-10 → synthesis.
- **Relations softened by raw-evidence weakness:**
  - `AC&DC` acronym expansion carried as high-confidence inference across 4 independent Drive artefacts, not customer-authored single line; the page carries a coverage flag. Ontology renders as `expandsAs`, not `formalDefinition`.
  - `Ingrun-Ulla Bartölke` and `Caroline Hattesohl` `hasSponsorshipGap` recorded as structural gaps (no SF sponsor mapped) rather than active-friction edges — raw doesn't yet show them declining sponsorship, only that no mapping exists.
  - `PowerCo NZC Loss Review Outcome` marked as `Not surfaced in raw — unknown` rather than asserted, per the opp page's own review flag.
- **Watchdog note:** landed all 7 priority files within the 8-min budget; no priority deferred.

## [2026-07-10] refresh-batch | 4 pages | VWFS exec cross-link pass

- **Trigger**: 15 VWFS exec pages materialized (8 new + 6 pre-existing) — Board tier + Direktbank + Leasing + Ops + Product + Salesforce-side (Dahlheim/Bandmann/Kretzberg/Stadler/Hattesohl/Voigt/Sutter/Knappstein/Lange/Garz M./Uphoff/Faeth/Kreft/Witte/Garz C.).
- **Scope**: coverage-refresh pass on `wiki/entities/accounts/vwfs-ag.md` + `wiki/initiatives/vwfs-transformation.md` + `wiki/briefs/sic-munich-2026-07-10.md` + `wiki/data/meddpicc-drought.md`.
- **Per-page results**:
  - `vwfs-ag.md` — 11 wikilinks added (Knappstein/M.Garz/Lange/Kreft at first mention in 2026-05-21 SIC entry; C.Garz/Sutter/Witte/Faeth at first mention in 2025-05-19 PoV entry; Stadler/Voigt/Bandmann in Board-tier Key contacts; Uphoff/Hattesohl in Markt DE section). 15 sources_consulted added. review_round 4→5. Coverage now PASS.
  - `vwfs-transformation.md` — 11 wikilinks added (mirror set — same Board + Markt DE + PoV nodes; Claudia Garz linked in Salesforce internal section). 15 sources_consulted added. review_round 3→4.
  - `sic-munich-2026-07-10.md` — 0 body-wikilinks added (no bare mentions of these 14 execs in body — Kretzberg + Stefan Imme already linked; Bergmann/Sommerfeld/Fuchs/Geutner/Mack already linked). 15 sources_consulted added. review_round 2→3. Coverage flag "VWFS Board tier not yet cross-linked to exec pages" resolved. `coverage: pass_with_flags` → `pass`.
  - `meddpicc-drought.md` — 0 wikilinks + 0 sources added. Scope orthogonal to VWFS exec roster (page is about VW SAM + Porsche opps owned by Schreier + Heimbring). review_round 1→2 with note recording the coverage re-check.
- **Verifier discipline**: serial in-line citation + contradiction on all 4 pages. All PASS. No new claims added (wikilink-markup only); pre-existing citations preserved.
- **Contradictions surfaced during cross-link**: none new. Two pre-existing soft flags noted:
  1. `christian-bandmann.md` slug vs display name "Anthony Bandmann" — target pages preserve raw-source display "Anthony Bandmann" via `[[entities/executives/christian-bandmann|Anthony Bandmann]]` piped form.
  2. Petra Faeth (exec-page title) vs "Petra Feath" (raw-source PoV spelling) — target pages preserve raw-source spelling; contradiction section in vwfs-transformation already documents this soft issue pending contact-record confirmation.
- **Recommendation for next refresh cycle**: refresh `wiki/entities/brands/vwfs.md` (if exists) and `wiki/comparisons/vwfs-de-vs-vwfs-uk.md` for the same exec cross-link pass; then check `wiki/capabilities/agentic-enterprise-vwfs.md` + `wiki/timelines/vwfs-architecture-evolution.md` for bare-mention conversions. Also check `wiki/entities/accounts/vwfs-uk.md` since Board execs (Dahlheim, Kretzberg, Bandmann) sit above both DE and UK operating cos.

## [2026-07-10] refresh-batch | 4 pages | VWFS exec cross-link pass (round 2)

- **Trigger**: follow-up to earlier 2026-07-10 exec cross-link batch — targets `wiki/capabilities/agentic-enterprise-vwfs.md`, `wiki/timelines/vwfs-architecture-evolution.md`, `wiki/comparisons/vwfs-de-vs-vwfs-uk.md`, `wiki/entities/accounts/vwfs-uk.md`.
- **Per-page results**:
  - `agentic-enterprise-vwfs.md` — 1 wikilink added (Gerhard Mack first body mention, line 30 opening paragraph). 1 source added (gerhard-mack.md). review_round 1→2. No coverage flags closed (existing flags orthogonal to exec cross-linking — they concern Data 360 102 / Product Insights peripheral decks).
  - `vwfs-architecture-evolution.md` — 9 wikilinks added (Anthony Bandmann + Thomas Sutter in Spring 2025 entry; Claudia Garz + Carolin Kreft + Heike Witte + Petra Feath in 2025-05-19 PoV entry; Matthias Knappstein + Mareike Garz + Jörn Lange in 2026-05-21 SIC entry). 9 sources added. review_round 1→2. No coverage flags closed (existing flags on R&R decks and citation-currency-normalization unrelated to exec linking).
  - `vwfs-de-vs-vwfs-uk.md` — 6 wikilinks added (Matthias Knappstein + Mareike Garz + Jörn Lange + Carolin "Caro" Kreft in Board-level counterpart line 46; Claudia Garz in Internal cast line 75; M. Voigt in Post-SIC Next Steps line 110). 6 sources added. review_round 1→2. No coverage flags (page was already PASS with empty flags).
  - `vwfs-uk.md` — 0 wikilinks added (none of the DE-side / Board-tier exec target list appears in body — page focuses on UK captive contacts: Todd/Smith/Kirby/James/Constantinou/Hartwell/Thornton). 0 sources added. review_round 3→4 for consistency with mechanical-pass discipline; existing coverage flags orthogonal.
- **Verifier discipline**: serial in-line citation + contradiction on all 4 pages. All PASS — no new factual claims, wikilink-markup only. Pre-existing citations preserved verbatim.
- **Coverage gap surfaced (worth next-cycle attention)**: `vwfs-uk.md` does NOT mention any of the VWFS Board-tier or Ops-tier DE execs (Kretzberg, Bandmann, Sutter, Knappstein, Lange, Garz M., Voigt) — despite Board execs sitting above both DE and UK operating cos and Kretzberg's group-CIO remit encompassing UK. Recommend: refresh `vwfs-uk.md` with a "Group-tier reporting line" section that cross-references DE-side execs whose scope includes UK. Not a defect of the current page — just an untapped cross-linking opportunity.
- **Contradictions surfaced during cross-link**: none new. Preserved raw-source display forms (Anthony Bandmann via piped form; Petra Feath vs slug petra-faeth via piped form).
- **Recommendation for next refresh cycle**: (a) group-tier cross-reference section in `vwfs-uk.md` per gap above; (b) verify `wiki/entities/accounts/vwfs-ag.md` / `wiki/initiatives/vwfs-transformation.md` cross-links match the newly-linked mentions in the timeline+comparison+capability pages; (c) sweep other VWFS-context pages (`wiki/opportunities/vwfs-*` if any) for the same 15-exec cross-link discipline.

