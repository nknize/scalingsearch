---
sidebar_position: 4
---

# Chapter 4: Segment Files and Storage Models

*Understand how search engines store and manage data on disk to balance speed, durability, and scale, and how this differs from analytics systems.*

## Chapter Overview

Search engines don't just store data; they organize it for fast retrieval while managing durability and storage efficiency. This chapter explores segment-based storage, the encoding strategies that make search fast, and the merge mechanics that keep storage manageable.

Understanding storage models is essential for capacity planning, performance tuning, and diagnosing issues related to disk I/O and memory pressure.

## 4.1 Segments and Encodings

**4.1.1** Data encoding

**4.1.2** IDs and primary keys

**4.1.3** Segments

## 4.2 Disk Layout and Compression

**4.2.1** Disk layout

**4.2.2** Block compression and run-length encoding

**4.2.3** Operating system advantages

## 4.3 Merging and Update Mechanics

**4.3.1** Merging and compaction strategies and tradeoffs

**4.3.2** Deletes and updates

**4.3.3** Soft deletes and tombstones

## Examples

*Examples coming soon.*

Code examples for this chapter will explore segment internals, demonstrate merge behavior, and show how to monitor and tune storage performance in Lucenia.
