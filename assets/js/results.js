(() => {
  const numberFormatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const track1Columns = [
    {
      key: "codeswitch",
      label: "Codeswitch",
      dataset: "CS-Dialogue",
      metric: "MER",
      group: "Linguistic",
      contextRps: false,
    },
    {
      key: "contextEn",
      label: "Context (EN)",
      dataset: "ContextASR-En",
      metric: "WER",
      group: "Linguistic",
      contextRps: true,
    },
    {
      key: "contextZh",
      label: "Context (ZH)",
      dataset: "ContextASR-Zh",
      metric: "CER",
      group: "Linguistic",
      contextRps: true,
    },
    {
      key: "dialect",
      label: "Dialect",
      dataset: "KeSpeech",
      metric: "CER",
      group: "Acoustic",
      contextRps: false,
    },
    {
      key: "noise",
      label: "Noise",
      dataset: "VoxPopuli-en",
      metric: "WER",
      group: "Acoustic",
      contextRps: false,
    },
    {
      key: "noiseReverb",
      label: "Noise/Reverb",
      dataset: "AISHELL-5",
      metric: "CER",
      group: "Acoustic",
      contextRps: false,
    },
  ];

  const track1Rows = [
    {
      model: "SenseVoice-Small",
      codeswitch: { raw: 7.52, rps: 0.93 },
      contextEn: { raw: 14.52, rps: 0.24 },
      contextZh: { raw: 6.44, rps: 0.39 },
      dialect: { raw: 12.46, rps: 0.31 },
      noise: { raw: 12.5, rps: 0.54 },
      noiseReverb: { raw: 38.63, rps: 0.64 },
    },
    {
      model: "Whisper-large-v3",
      codeswitch: { raw: 15.91, rps: 0.44 },
      contextEn: { raw: 8.37, rps: 0.41 },
      contextZh: { raw: 8.29, rps: 0.3 },
      dialect: { raw: 30.65, rps: 0.12 },
      noise: { raw: 12.62, rps: 0.53 },
      noiseReverb: { raw: 45.11, rps: 0.55 },
    },
    {
      model: "Parakeet-en",
      codeswitch: { raw: null, rps: null },
      contextEn: { raw: 8.67, rps: 0.4 },
      contextZh: { raw: null, rps: null },
      dialect: { raw: null, rps: null },
      noise: { raw: 6.72, rps: 1.0 },
      noiseReverb: { raw: null, rps: null },
    },
    {
      model: "Gemini-2.5pro",
      codeswitch: { raw: 17.96, rps: 0.39 },
      contextEn: { raw: 3.47, rps: 1.0 },
      contextZh: { raw: 2.78, rps: 0.9 },
      dialect: { raw: 31.82, rps: 0.12 },
      noise: { raw: 9.03, rps: 0.74 },
      noiseReverb: { raw: 64.49, rps: 0.38 },
    },
    {
      model: "Qwen3-ASR-1.7B",
      codeswitch: { raw: 7.0, rps: 1.0 },
      contextEn: { raw: 5.58, rps: 0.62 },
      contextZh: { raw: 2.5, rps: 1.0 },
      dialect: { raw: 5.12, rps: 0.74 },
      noise: { raw: 7.41, rps: 0.91 },
      noiseReverb: { raw: 25.46, rps: 0.97 },
    },
    {
      model: "FireRedLLM-L-7B",
      codeswitch: { raw: 7.44, rps: 0.94 },
      contextEn: { raw: 8.01, rps: 0.43 },
      contextZh: { raw: 3.44, rps: 0.73 },
      dialect: { raw: 3.81, rps: 1.0 },
      noise: { raw: 11.87, rps: 0.57 },
      noiseReverb: { raw: 24.74, rps: 1.0 },
    },
    {
      model: "Kimi-Audio",
      codeswitch: { raw: 11.94, rps: 0.59 },
      contextEn: { raw: 6.66, rps: 0.52 },
      contextZh: { raw: 2.96, rps: 0.84 },
      dialect: { raw: 7.8, rps: 0.49 },
      noise: { raw: 10.63, rps: 0.63 },
      noiseReverb: { raw: 45.72, rps: 0.54 },
    },
  ];

  const track2Models = [
    { key: "pipeline", label: "Pipeline" },
    { key: "gemini30", label: "Gemini 3.0-pro" },
    { key: "qwen3Omni", label: "Qwen3 Omni" },
    { key: "kimiAudio", label: "Kimi Audio" },
    { key: "gemini25", label: "Gemini 2.5pro" },
  ];

  const track2Tasks = [
    {
      key: "ASR",
      direction: "down",
      directionLabel: "↓",
      datasets: [
        {
          name: "LibriSpeech (clean)",
          values: { pipeline: 2.9, gemini30: 2.78, qwen3Omni: 1.7, kimiAudio: 2.3, gemini25: 3.07 },
        },
        {
          name: "LibriSpeech (other)",
          values: { pipeline: 5.1, gemini30: 4.4, qwen3Omni: 3.05, kimiAudio: 3.83, gemini25: 4.93 },
        },
        {
          name: "AISHELL-1",
          values: { pipeline: 5.93, gemini30: 3.6, qwen3Omni: 1.02, kimiAudio: 0.8, gemini25: 4.49 },
        },
      ],
    },
    {
      key: "GR",
      direction: "up",
      directionLabel: "↑",
      datasets: [
        {
          name: "LibriSpeech GR",
          values: {
            pipeline: 53.69,
            gemini30: 78.5,
            qwen3Omni: 82.74,
            kimiAudio: 92.02,
            gemini25: 59.64,
          },
        },
      ],
    },
    {
      key: "S2TT",
      direction: "up",
      directionLabel: "↑",
      datasets: [
        {
          name: "CoVoST2 EN→ZH",
          values: {
            pipeline: 18.12,
            gemini30: 15.92,
            qwen3Omni: 46.25,
            kimiAudio: null,
            gemini25: 41.44,
          },
        },
        {
          name: "CoVoST2 ZH→EN",
          values: {
            pipeline: 53.37,
            gemini30: 15.5,
            qwen3Omni: 50.61,
            kimiAudio: null,
            gemini25: 60.14,
          },
        },
      ],
    },
    {
      key: "SER",
      direction: "up",
      directionLabel: "↑",
      datasets: [
        {
          name: "IEMOCAP",
          values: {
            pipeline: 52.62,
            gemini30: 66.56,
            qwen3Omni: 66.16,
            kimiAudio: 69.38,
            gemini25: 63.01,
          },
        },
      ],
    },
    {
      key: "SLU",
      direction: "up",
      directionLabel: "↑",
      datasets: [
        {
          name: "MMSU-Reason",
          values: {
            pipeline: 76.45,
            gemini30: 89.07,
            qwen3Omni: 83.61,
            kimiAudio: 75.33,
            gemini25: 84.64,
          },
        },
      ],
    },
  ];

  const state = {
    track1: {
      metricMode: "raw",
      sortBy: "avgRps",
      search: "",
      highlightBest: true,
      renderedRows: [],
    },
    track2: {
      viewMode: "cards",
      activeTasks: new Set(track2Tasks.map((task) => task.key)),
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    initFrameworkOverview();
    initFrameworkLightbox();
    initTrack1();
    initTrack2();
  });

  function initFrameworkOverview() {
    const chips = document.getElementById("framework-legend-chips");
    const explainer = document.getElementById("framework-legend-text");
    if (!chips || !explainer) {
      return;
    }

    const explanations = {
      perception:
        "Perception captures signal-level understanding, including robustness to acoustic quality and speaker variability.",
      recognition:
        "Recognition targets semantic extraction and context-sensitive decoding behavior under realistic user prompts.",
      track1:
        "System-level evaluation using scenario suites curated from open data to approximate real-world conditions, covering acoustic stressors and linguistic stressors",
      track2:
        "A unified evaluation spanning shallow perception, shallow cognition, deep cognition, covering representative Speech LLMs as well as cascaded pipelines.",
    };

    const setActive = (key) => {
      chips.querySelectorAll(".legend-chip").forEach((chip) => {
        const isActive = chip.dataset.key === key;
        chip.classList.toggle("is-active", isActive);
        chip.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
      explainer.textContent = explanations[key] || "";
    };

    chips.addEventListener("click", (event) => {
      const button = event.target.closest("button.legend-chip");
      if (!button) {
        return;
      }
      setActive(button.dataset.key);
    });

    const defaultKey = chips.querySelector(".legend-chip.is-active")?.dataset.key || "perception";
    setActive(defaultKey);
  }

  function initFrameworkLightbox() {
    const modal = document.getElementById("framework-lightbox");
    const modalImage = document.getElementById("framework-lightbox-image");
    const triggers = document.querySelectorAll(".framework-lightbox-trigger");
    if (!modal || !modalImage || !triggers.length) {
      return;
    }

    const closeLightbox = () => {
      modal.classList.add("is-hidden");
      modalImage.src = "";
      modalImage.alt = "";
      document.body.style.overflow = "";
    };

    const openLightbox = (src, alt) => {
      modalImage.src = src;
      modalImage.alt = alt || "";
      modal.classList.remove("is-hidden");
      document.body.style.overflow = "hidden";
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        openLightbox(trigger.dataset.src, trigger.dataset.alt);
      });
    });

    modal.addEventListener("click", (event) => {
      if (event.target.closest("[data-close-lightbox]")) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !modal.classList.contains("is-hidden")) {
        closeLightbox();
      }
    });
  }

  function initTrack1() {
    const table = document.getElementById("track1-table");
    const sortSelect = document.getElementById("track1-sort");
    const searchInput = document.getElementById("track1-model-search");
    const highlightCheckbox = document.getElementById("track1-highlight-best");
    const metricToggle = document.getElementById("track1-metric-toggle");
    const downloadButton = document.getElementById("track1-download");

    if (!table || !sortSelect || !searchInput || !highlightCheckbox || !metricToggle || !downloadButton) {
      return;
    }

    sortSelect.innerHTML = buildTrack1SortOptions();
    sortSelect.value = state.track1.sortBy;

    metricToggle.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-mode]");
      if (!button) {
        return;
      }

      state.track1.metricMode = button.dataset.mode;
      metricToggle.querySelectorAll("button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderTrack1();
    });

    sortSelect.addEventListener("change", () => {
      state.track1.sortBy = sortSelect.value;
      renderTrack1();
    });

    searchInput.addEventListener("input", () => {
      state.track1.search = searchInput.value.trim().toLowerCase();
      renderTrack1();
    });

    highlightCheckbox.addEventListener("change", () => {
      state.track1.highlightBest = highlightCheckbox.checked;
      renderTrack1();
    });

    downloadButton.addEventListener("click", () => {
      const csv = buildTrack1Csv(state.track1.renderedRows);
      triggerCsvDownload(csv, "track1_scenario_stress_tests.csv");
    });

    renderTrack1();
  }

  function buildTrack1SortOptions() {
    const optionHtml = ['<option value="avgRps">Average RPS</option>'];
    track1Columns.forEach((column) => {
      optionHtml.push(`<option value="${column.key}__raw">${escapeHtml(column.label)} (Raw)</option>`);
      optionHtml.push(`<option value="${column.key}__rps">${escapeHtml(column.label)} (RPS)</option>`);
    });
    return optionHtml.join("");
  }

  function renderTrack1() {
    const table = document.getElementById("track1-table");
    if (!table) {
      return;
    }

    const rows = getFilteredAndSortedTrack1Rows();
    state.track1.renderedRows = rows;

    const mode = state.track1.metricMode;
    const displayColumns = getTrack1DisplayColumns(mode);
    const bestMap = state.track1.highlightBest ? computeBestPerTrack1Column(rows, displayColumns) : {};

    const linguisticColspan = track1Columns
      .filter((column) => column.group === "Linguistic")
      .reduce((sum) => sum + (mode === "both" ? 2 : 1), 0);
    const acousticColspan = track1Columns
      .filter((column) => column.group === "Acoustic")
      .reduce((sum) => sum + (mode === "both" ? 2 : 1), 0);

    const scenarioHeaders = track1Columns
      .map((column) => {
        const contextTooltip = column.contextRps
          ? '<span class="results-tooltip" tabindex="0" role="note" aria-label="RPS computed using hotword-injection." data-tooltip="RPS computed using hotword-injection.">i</span>'
          : "";
        const colspan = mode === "both" ? 2 : 1;
        return `
          <th colspan="${colspan}">
            ${escapeHtml(column.label)}${contextTooltip}
            <span class="col-dataset">${escapeHtml(column.dataset)}
              <span class="metric-badge down">${escapeHtml(column.metric)}↓</span>
            </span>
          </th>
        `;
      })
      .join("");

    const metricHeaders =
      mode === "both"
        ? track1Columns
            .map(
              () =>
                '<th>Raw <span class="metric-badge down">↓</span></th><th>RPS <span class="metric-badge up">↑</span></th>'
            )
            .join("")
        : track1Columns
            .map(() =>
              mode === "raw"
                ? '<th>Raw <span class="metric-badge down">↓</span></th>'
                : '<th>RPS <span class="metric-badge up">↑</span></th>'
            )
            .join("");

    const bodyRows = rows.length
      ? rows
          .map((row) => {
            const valueCells = displayColumns
              .map((column) => {
                const value = row[column.key][column.type];
                if (value == null) {
                  return '<td class="value-missing">—</td>';
                }

                const isBest = bestMap[column.id] != null && value === bestMap[column.id];
                return `<td class="${isBest ? "best-cell" : ""}">${formatNumber(value)}</td>`;
              })
              .join("");

            return `<tr><td class="sticky-col">${escapeHtml(row.model)}</td>${valueCells}</tr>`;
          })
          .join("")
      : `<tr><td class="sticky-col">No matching models</td><td colspan="${displayColumns.length}" class="value-missing">Adjust search or sort settings.</td></tr>`;

    table.innerHTML = `
      <thead>
        <tr>
          <th class="sticky-col" rowspan="3">Model</th>
          <th colspan="${linguisticColspan}">Linguistic</th>
          <th colspan="${acousticColspan}">Acoustic</th>
        </tr>
        <tr>${scenarioHeaders}</tr>
        <tr>${metricHeaders}</tr>
      </thead>
      <tbody>${bodyRows}</tbody>
    `;
  }

  function getTrack1DisplayColumns(mode) {
    const columns = [];
    track1Columns.forEach((column) => {
      if (mode === "both" || mode === "raw") {
        columns.push({ id: `${column.key}__raw`, key: column.key, type: "raw" });
      }
      if (mode === "both" || mode === "rps") {
        columns.push({ id: `${column.key}__rps`, key: column.key, type: "rps" });
      }
    });
    return columns;
  }

  function getFilteredAndSortedTrack1Rows() {
    const filtered = track1Rows.filter((row) => row.model.toLowerCase().includes(state.track1.search));
    const sortBy = state.track1.sortBy;

    const sorted = [...filtered].sort((rowA, rowB) => {
      if (sortBy === "avgRps") {
        const valueA = computeAverageRps(rowA);
        const valueB = computeAverageRps(rowB);
        const cmp = compareNullableNumbers(valueA, valueB, false);
        return cmp !== 0 ? cmp : rowA.model.localeCompare(rowB.model);
      }

      const [columnKey, type] = sortBy.split("__");
      const valueA = rowA[columnKey] ? rowA[columnKey][type] : null;
      const valueB = rowB[columnKey] ? rowB[columnKey][type] : null;
      const ascending = type === "raw";
      const cmp = compareNullableNumbers(valueA, valueB, ascending);
      return cmp !== 0 ? cmp : rowA.model.localeCompare(rowB.model);
    });

    return sorted;
  }

  function computeAverageRps(row) {
    const values = track1Columns
      .map((column) => row[column.key].rps)
      .filter((value) => value != null && Number.isFinite(value));
    if (!values.length) {
      return null;
    }
    return values.reduce((sum, value) => sum + value, 0) / values.length;
  }

  function computeBestPerTrack1Column(rows, displayColumns) {
    const bestMap = {};
    displayColumns.forEach((column) => {
      const values = rows
        .map((row) => row[column.key][column.type])
        .filter((value) => value != null && Number.isFinite(value));
      if (!values.length) {
        return;
      }
      bestMap[column.id] = column.type === "raw" ? Math.min(...values) : Math.max(...values);
    });
    return bestMap;
  }

  function buildTrack1Csv(rows) {
    const header = ["Model"];
    track1Columns.forEach((column) => {
      header.push(`${column.label} Raw`);
      header.push(`${column.label} RPS`);
    });
    header.push("Average RPS");

    const lines = [header.join(",")];
    rows.forEach((row) => {
      const parts = [csvEscape(row.model)];
      track1Columns.forEach((column) => {
        const point = row[column.key];
        parts.push(csvValue(point.raw));
        parts.push(csvValue(point.rps));
      });
      parts.push(csvValue(computeAverageRps(row)));
      lines.push(parts.join(","));
    });

    return lines.join("\n");
  }

  function initTrack2() {
    const chips = document.getElementById("track2-task-chips");
    const viewToggle = document.getElementById("track2-view-toggle");
    const downloadButton = document.getElementById("track2-download");

    if (!chips || !viewToggle || !downloadButton) {
      return;
    }

    chips.addEventListener("click", (event) => {
      const button = event.target.closest("button.task-chip");
      if (!button) {
        return;
      }

      const task = button.dataset.task;
      if (state.track2.activeTasks.has(task)) {
        state.track2.activeTasks.delete(task);
      } else {
        state.track2.activeTasks.add(task);
      }
      renderTrack2();
    });

    viewToggle.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-view]");
      if (!button) {
        return;
      }
      state.track2.viewMode = button.dataset.view;
      viewToggle.querySelectorAll("button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderTrack2();
    });

    downloadButton.addEventListener("click", () => {
      const csv = buildTrack2Csv(getSelectedTrack2Tasks());
      triggerCsvDownload(csv, "track2_full_stack_tasks.csv");
    });

    renderTrack2();
  }

  function renderTrack2() {
    const cardsContainer = document.getElementById("track2-task-cards");
    const unifiedContainer = document.getElementById("track2-unified-view");
    const unifiedTable = document.getElementById("track2-unified-table");
    const chips = document.getElementById("track2-task-chips");

    if (!cardsContainer || !unifiedContainer || !unifiedTable || !chips) {
      return;
    }

    chips.querySelectorAll(".task-chip").forEach((chip) => {
      chip.classList.toggle("is-active", state.track2.activeTasks.has(chip.dataset.task));
    });

    const selectedTasks = getSelectedTrack2Tasks();

    if (state.track2.viewMode === "cards") {
      unifiedContainer.classList.add("is-hidden");
      cardsContainer.classList.remove("is-hidden");
    } else {
      unifiedContainer.classList.remove("is-hidden");
      cardsContainer.classList.add("is-hidden");
    }

    renderTrack2Cards(cardsContainer, selectedTasks);
    renderTrack2Unified(unifiedTable, selectedTasks);
  }

  function getSelectedTrack2Tasks() {
    return track2Tasks.filter((task) => state.track2.activeTasks.has(task.key));
  }

  function renderTrack2Cards(container, tasks) {
    if (!tasks.length) {
      container.innerHTML = '<div class="no-results">No tasks selected. Enable one or more task chips above.</div>';
      return;
    }

    container.innerHTML = tasks
      .map((task) => {
        const headerColumns = track2Models.map((model) => `<th>${escapeHtml(model.label)}</th>`).join("");
        const rows = task.datasets
          .map((dataset) => {
            const bestValue = getBestValue(dataset.values, task.direction);
            const valueCells = track2Models
              .map((model) => {
                const value = dataset.values[model.key];
                if (value == null) {
                  return '<td class="value-missing">—</td>';
                }
                const isBest = value === bestValue;
                return `<td class="${isBest ? "best-cell" : ""}">${formatNumber(value)}</td>`;
              })
              .join("");
            return `<tr><td>${escapeHtml(dataset.name)}</td>${valueCells}</tr>`;
          })
          .join("");

        return `
          <section class="task-card">
            <div class="task-card-header">
              <h4>${escapeHtml(task.key)}</h4>
              <span class="task-direction">${escapeHtml(task.directionLabel)}</span>
            </div>
            <table class="task-card-table">
              <thead>
                <tr>
                  <th>Dataset</th>
                  ${headerColumns}
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </section>
        `;
      })
      .join("");
  }

  function renderTrack2Unified(table, tasks) {
    if (!tasks.length) {
      table.innerHTML =
        '<tbody><tr><td class="value-missing">No tasks selected. Enable one or more task chips above.</td></tr></tbody>';
      return;
    }

    const headerColumns = track2Models.map((model) => `<th>${escapeHtml(model.label)}</th>`).join("");
    const bodyRows = [];

    tasks.forEach((task) => {
      task.datasets.forEach((dataset) => {
        const ranks = rankDataset(dataset.values, task.direction);
        const rankCells = track2Models
          .map((model) => {
            const value = dataset.values[model.key];
            if (value == null) {
              return '<td class="value-missing">—</td>';
            }
            const rank = ranks[model.key];
            const rankClass = `rank-cell rank-${Math.min(rank, 5)}`;
            const title = `Original: ${formatNumber(value)}`;
            return `<td class="${rankClass}" title="${escapeHtml(title)}">${rank}</td>`;
          })
          .join("");

        bodyRows.push(`
          <tr>
            <td>${escapeHtml(task.key)} (${escapeHtml(task.directionLabel)})</td>
            <td>${escapeHtml(dataset.name)}</td>
            ${rankCells}
          </tr>
        `);
      });
    });

    table.innerHTML = `
      <thead>
        <tr>
          <th>Task</th>
          <th>Dataset</th>
          ${headerColumns}
        </tr>
      </thead>
      <tbody>${bodyRows.join("")}</tbody>
    `;
  }

  function rankDataset(valuesByModel, direction) {
    const values = track2Models
      .map((model) => ({ key: model.key, value: valuesByModel[model.key] }))
      .filter((entry) => entry.value != null && Number.isFinite(entry.value))
      .sort((a, b) => (direction === "down" ? a.value - b.value : b.value - a.value));

    const ranks = {};
    values.forEach((entry, index) => {
      ranks[entry.key] = index + 1;
    });
    return ranks;
  }

  function getBestValue(valuesByModel, direction) {
    const values = track2Models
      .map((model) => valuesByModel[model.key])
      .filter((value) => value != null && Number.isFinite(value));
    if (!values.length) {
      return null;
    }
    return direction === "down" ? Math.min(...values) : Math.max(...values);
  }

  function buildTrack2Csv(tasks) {
    const header = ["Task", "Dataset", "Direction", ...track2Models.map((model) => model.label)];
    const lines = [header.map(csvEscape).join(",")];

    tasks.forEach((task) => {
      task.datasets.forEach((dataset) => {
        const row = [task.key, dataset.name, task.directionLabel];
        track2Models.forEach((model) => {
          row.push(csvValue(dataset.values[model.key]));
        });
        lines.push(row.map(csvEscape).join(","));
      });
    });

    return lines.join("\n");
  }

  function compareNullableNumbers(valueA, valueB, ascending) {
    if (valueA == null && valueB == null) {
      return 0;
    }
    if (valueA == null) {
      return 1;
    }
    if (valueB == null) {
      return -1;
    }

    return ascending ? valueA - valueB : valueB - valueA;
  }

  function csvValue(value) {
    return value == null ? "" : String(Number(value.toFixed(4)));
  }

  function formatNumber(value) {
    return value == null ? "—" : numberFormatter.format(value);
  }

  function triggerCsvDownload(content, fileName) {
    const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function csvEscape(value) {
    const raw = value == null ? "" : String(value);
    if (raw.includes(",") || raw.includes('"') || raw.includes("\n")) {
      return `"${raw.replace(/"/g, '""')}"`;
    }
    return raw;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
})();
